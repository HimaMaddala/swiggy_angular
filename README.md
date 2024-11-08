# Swiggy Clone Application

This project is a Swiggy-like clone built using Angular 17, styled with Tailwind CSS. It allows users to sign in, add items to a cart, mark favorites, and manage sessions with data storage and syncing using MockAPI and `localStorage`.

## Features

### User Sign-In and Session Management
- Users can sign in with predefined credentials:
  - Username and Password for both users: `tom` and `john`
- After signing in, a session is created that enables users to manage their cart and favorites.
- Cart and favorite items are synced between MockAPI and `localStorage` for consistent user experience across sessions.

### Cart and Favorites Management
- **Cart**: Users can add menu items to the cart from a specific restaurant.
- **Favorites**: Items can be marked as favorites for easy access.
- Both cart and favorites data are stored in MockAPI and `localStorage`, ensuring data persistence across sessions.

### Project Structure
- **Routes**: Defined in `app.routes.ts` for easy navigation across components.
- **Main Configuration**: `main.ts` serves as the main configuration file, replacing `app.config.ts`.

### Services
Business logic is organized using services located in the `src/app/services` folder:
- `cart.service.ts`: Manages cart items and session syncing.
- `favorites.service.ts`: Handles favorite items and session syncing.
- `usersession.service.ts`: Manages user authentication and session data.
- `restaurant.service.ts`: Manages restaurant and menu data.

### Styling
- **Tailwind CSS**: The app is styled using Tailwind CSS for a responsive, professional UI.

### Icons
**Font Awesome**: Font Awesome icons are used throughout the app.

#### Installation
1. Install Font Awesome:
   ```bash
   npm install @fortawesome/fontawesome-free

## Demo Users
For demonstration, only two users are available:
- **User 1**: Username - `tom`, Password - `tom`
- **User 2**: Username - `john`, Password - `john`

## Getting Started

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the app using `ng serve`.
4. Open `http://localhost:4200` in your browser to view the application.

## Notes
- The application uses standalone components in Angular.
- Cart and favorites are limited to items from the same restaurant per session.

This project demonstrates essential functionality and user session management in an Angular application, making it suitable for demonstrating user state management concepts.
