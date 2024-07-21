This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# ImageBox

ImageBox is a dynamic image search website built using the Unsplash API. It features advanced search capabilities, pagination, user collections, and light/dark mode, showcasing my frontend development skills. The project is designed to offer a comprehensive image search and management platform with an engaging and accessible user experience.

## Live Demo

[ImageBox Live](https://image-box-six.vercel.app/)

## Project Goal

ImageBox was developed as a portfolio project to demonstrate my frontend development skills and my ability to create dynamic, interactive web applications. The primary goal was to build a comprehensive image search and management platform that showcases various advanced features, such as real-time photo searches using the Unsplash API, user authentication and collection management. By incorporating functionalities like pagination, light/dark mode and responsive design, I aimed to create an engaging and accessible user experience.

## Technologies Used

Next.js
TypeScript
Tailwind CSS
Drizzle
Shadcn/ui
React Testing Library
Vitest
Zod

## Features

- Search for images using the Unsplash API with real-time results.
- Efficient navigation through search results with pagination.
- View detailed information about each photo, including the author, date added and related tags.
- Clickable tags on photo pages that lead to search results for related images.
- Add/remove photos to/from existing collections or create new ones through a user-friendly popup, which includes search functionality for existing collections and displays the latest collections.
- View user collections in a dedicated collections page.
- Edit collection names and delete collections.
- Secure sign-in and sign-up functionality using Kinde.
- Toggle between light and dark modes for a customized user experience.
- Ensures optimal performance and usability across various devices and screen sizes.
- Utilizes Supabase for data storage and Drizzle ORM for database communication.

## Challenges

### Displaying Photos in a Waterfall/Masonry Grid

I faced the challenge of displaying photos in a responsive grid while preserving their original aspect ratios and order. By creating a custom media query hook and dynamically adjusting the number of columns based on screen size, I achieved a visually appealing masonry layout. Read my detailed blog post on how I implemented this solution [here](https://elgun.me/blog/responsive-waterfall-masonry-photo-grid-in-react).

### Implementing Pagination on the Search Page

To implement pagination on the search page, I created a component that dynamically generates pagination controls based on the current page and total pages. The pagination system ensures:

- The pagination item for the current page is disabled to prevent unnecessary clicks.
- The link to the previous page is not shawn if the current page is the first page.
- The link to the next page is not shown if the current page is the last page.
- There are always three pagination items displayed, except when the total number of pages is less than three.
- An ellipsis icon is displayed before the next page link to indicate more pages. This ellipsis is not shown if the current page is the page before the last page or if there are only three total pages.

### Implementing Instant UI Updates for Collection Name Edits

To ensure that changes to a collection's name appear instantly on the UI, I used a custom `useOptimisticCollectionNameContext` hook, created with React's `useContext` and `useOptimistic` hooks. When the user submits a new collection name, the UI updates immediately by setting the optimistic state. The change is then asynchronously saved to the database. If the update fails, an error message is displayed. This approach provides a smooth and responsive user experience by eliminating wait times for database updates.

## Acknowledgments

- Design provided by [devchallenges.io](https://devchallenges.io/challenge/unsplash-collection)
- [Unsplash](https://unsplash.com/developers) for providing a rich and free image API.
