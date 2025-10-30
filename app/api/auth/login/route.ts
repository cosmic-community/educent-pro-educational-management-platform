import { NextResponse } from 'next/server'
import { authenticateUser, createSession } from '@/lib/auth'
import { UserRole } from '@/types'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, dateOfBirth, password, role } = body

    if (!username || !role) {
      return NextResponse.json(
        { error: 'Username and role are required' },
        { status: 400 }
      )
    }

    // Admin requires password
    if (role === 'Admin' && !password) {
      return NextResponse.json(
        { error: 'Password is required for admin login' },
        { status: 400 }
      )
    }

    // Other roles require date of birth
    if (role !== 'Admin' && !dateOfBirth) {
      return NextResponse.json(
        { error: 'Date of birth is required' },
        { status: 400 }
      )
    }

    const user = await authenticateUser(
      {
        username,
        dateOfBirth: dateOfBirth || '',
        password,
      },
      role as UserRole
    )

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const session = createSession(user)

    return NextResponse.json({
      success: true,
      session,
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    )
  }
}