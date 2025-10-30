import { User, LoginCredentials, AuthSession, UserRole } from '@/types'
import { cosmic, safeFetch } from './cosmic'

export async function authenticateUser(
  credentials: LoginCredentials,
  role: UserRole
): Promise<User | null> {
  try {
    // Build query based on role
    const query: Record<string, any> = {
      type: 'users',
      'metadata.username': credentials.username,
      'metadata.date_of_birth': credentials.dateOfBirth,
      'metadata.role.value': role,
      'metadata.active': true,
    };

    // Admin requires password
    if (role === 'Admin' && credentials.password) {
      query['metadata.password'] = credentials.password;
    }

    // Fixed: Properly await the complete query chain
    const response = await cosmic.objects
      .find(query)
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);

    // Fixed: Handle empty results
    if (!response.objects || response.objects.length === 0) {
      return null;
    }

    // Fixed: Explicitly handle undefined case with proper type narrowing
    const user = response.objects[0];
    return user ? (user as User) : null;
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

export function createSession(user: User): AuthSession {
  return {
    user,
    role: user.metadata.role.value,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
}

export function validateSession(session: AuthSession | null): boolean {
  if (!session) return false;
  return Date.now() < session.expiresAt;
}