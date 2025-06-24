# Algolia Search Setup Guide

## Overview
This project now includes a modern Algolia search implementation using React InstantSearch v7. The search functionality allows users to find people and posts in real-time.

## Environment Setup

1. **Add Environment Variables**
   Create or update your `.env.local` file with your Algolia credentials:
   ```bash
   NEXT_PUBLIC_ALGOLIA_APP_ID=your_algolia_app_id
   NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your_algolia_search_only_api_key
   ```

   ⚠️ **Important**: Use your **Search-Only API Key**, not your Admin API Key for security.

## How It Works

### Architecture
- **Frontend Search Client** (`src/lib/algolia-client.ts`): Optimized lite client for search operations
- **Search Component** (`src/components/dashboard-header/searchComponent.tsx`): Main search interface
- **Search Results** (`src/components/search/search-results.tsx`): Displays search results for users and posts
- **Data Sync** (`src/lib/algolia-search.ts`): Existing sync functionality (unchanged)

### Search Indices
- `users` - Contains user profiles with name, bio, department, year, etc.
- `posts` - Contains posts with content, author information, etc.

### Features
- **Real-time search** - Results appear as you type
- **Multi-index search** - Searches both users and posts simultaneously
- **Modern UI** - Matches your existing design system
- **Responsive** - Works on desktop and mobile
- **Accessible** - Proper ARIA attributes and keyboard navigation

## Usage

The search component automatically integrates into your existing header. Users can:

1. Click the search icon to open the search input
2. Type to see real-time results
3. See up to 3 users and 3 posts in the dropdown
4. Click outside or press ESC to close

## Data Structure

### User Index Fields
- `objectID` - Unique user ID
- `name` - User's name
- `department` - Academic department
- `year` - Academic year
- `profilePicture` - Profile image URL
- `bio` - User bio/description
- `availability` - Whether user is available for connections
- `reading` - Current reading interests

### Post Index Fields
- `objectID` - Unique post ID
- `content` - Post content
- `authorId` - ID of post author
- `authorName` - Name of post author
- `authorProfilePicture` - Author's profile image URL

## Customization

### Styling
The search component uses your existing design tokens and Tailwind classes. Modify the `classNames` prop in the `SearchBox` component to adjust styling.

### Search Behavior
- **Search-as-you-type**: Enabled by default
- **Results limit**: Set to 20 hits per index (can be modified in `Configure` component)
- **Minimum query length**: No minimum (searches start immediately)

### Result Display
Customize the `UserHit` and `PostHit` components in `search-results.tsx` to modify how results appear.

## Troubleshooting

### Common Issues

1. **"Missing Algolia configuration" Error**
   - Ensure environment variables are set correctly
   - Restart your development server after adding env vars

2. **No Search Results**
   - Verify your indices contain data
   - Check your Search-Only API key permissions
   - Ensure index names match (`users` and `posts`)

3. **Search Not Working**
   - Check browser console for errors
   - Verify Algolia credentials are correct
   - Ensure you're using the Search-Only API key (not Admin key)

### Environment Variables Validation
The search client will throw an error if environment variables are missing, helping you identify configuration issues quickly.

## Next Steps

1. **Add your Algolia credentials** to `.env.local`
2. **Test the search functionality** in your development environment
3. **Customize styling** if needed to match your design
4. **Add click handlers** to search results for navigation
5. **Consider adding search analytics** for insights

## Dependencies

This implementation uses:
- `algoliasearch` v5.29.0 - Algolia JavaScript client
- `react-instantsearch` v7.16.0 - React InstantSearch components
- Your existing UI components (Button, Card, Avatar, etc.)

The implementation follows Algolia's latest best practices and uses the v5 client with React InstantSearch v7 for optimal performance and developer experience. 