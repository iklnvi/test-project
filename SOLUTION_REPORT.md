# What Was Done

## 1. Global State Management for Active Item

To persist the active item selection across the app:

- Implemented a **React Context** (`ActiveItemContext`) to store `activeItemId` and `setActiveItemId`.
- Wrapped the app in `ActiveItemProvider` to provide access throughout the component tree.

## 2. List View Functionality

- Used a custom `useData` hook to fetch items from the backend.
- Cleared interval in useEffect of custom `useData` hook.
- Added sorting (`ASC/DESC`) using a custom `useSort` hook.
- Enabled filtering based on `id`.
- Clicking an item sets it as active and navigates to the detail view.
- Active items are visually highlighted in the list.

## 3. Detail View and 403 Edge Case Handling

- When fetching a single item in `SinglePage`, we now explicitly check for HTTP status code **403**.
- If such a case is detected, we show a friendly message:

  > **Access Denied (403): You don't have permission to view this item.**

- General fetch errors are also caught and reported.

## 4. UX Enhancements

- Displayed the current `activeItemId` in the subtitle.
- Disabled the “Set Active” button when the item is already active.
- Included a loading message when data is not yet available.

---

# Suggestions for Improvement

## Architectural Improvements

- **Persistent Active Item State**  
  Store `activeItemId` in `localStorage` or URL query parameters to preserve the state after page refresh.

- **Error Boundaries**  
  Wrap the app or specific pages in an [Error Boundary](https://reactjs.org/docs/error-boundaries.html) component for better crash recovery and user experience.

- **Typed Context & Hooks**  
  Replace all `any` types in context and custom hooks with strongly typed TypeScript interfaces to improve maintainability and safety.

## API Handling

- **HTTP Client Abstraction**  
  Use `axios` or a `fetch` wrapper with interceptors to handle common error logic in a centralized and reusable way.

- **Status-Specific Handling**  
  Gracefully handle other HTTP statuses like `404`, `500`, etc., with user-friendly error messages.

## Testing

- **Unit Testing with React Testing Library**  
  Test context logic, list filtering/sorting, and error display logic in detail views.

- **E2E Tests with Cypress**  
  Simulate full user flows including:
  - Selecting an item
  - Navigating to a detail view
  - Handling the 403 error edge case

## UX Polish

- Add **skeleton loaders** or shimmer effects for loading states instead of static messages.
- Animate transitions between list and detail views for smoother interaction.
- Display **toast notifications** for errors (e.g., using `react-toastify`) to provide better visibility to the user.
