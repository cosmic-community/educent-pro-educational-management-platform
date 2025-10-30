import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for handling Cosmic SDK errors
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Safe fetch function with error handling
export async function safeFetch<T>(
  fetchFn: () => Promise<{ objects: T[] }>
): Promise<T[]> {
  try {
    const response = await fetchFn();
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching from Cosmic:', error);
    throw new Error('Failed to fetch data');
  }
}