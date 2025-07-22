'use server';

import { revalidateTag } from 'next/cache';

/**
 * Revalidates the 'randomJoke' cache tag to ensure fresh data is fetched.
 * @returns {Promise<void>} Resolves when the cache has been revalidated.
 */
export async function randomJoke(): Promise<void> {
  // Invalidate all data tagged with 'randomJoke' in the cache
  revalidateTag('randomJoke');
}
