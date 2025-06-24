// Frontend Algolia search client configuration
// Uses the lite client optimized for search-only operations

import { liteClient as algoliasearch } from 'algoliasearch/lite';

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;

console.log(appId, apiKey);

if (!appId || !apiKey) {
  throw new Error(
    'Missing Algolia configuration. Please set NEXT_PUBLIC_ALGOLIA_APP_ID and NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY in your environment variables.'
  );
}

export const searchClient = algoliasearch(appId, apiKey);

export const INDICES = {
  USERS: 'users',
  POSTS: 'posts',
} as const; 