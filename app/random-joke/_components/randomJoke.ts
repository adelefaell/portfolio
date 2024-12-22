'use server';

import { revalidateTag } from 'next/cache';

export async function randomJoke() {
  // Invalidate all data tagged with 'randomJoke' in the cache
  revalidateTag('randomJoke');
}
