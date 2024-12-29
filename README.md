# LanLink Web App: A Vue.js-based Dashboard Application

LanLink Web App is a modern, responsive web application built with Vue.js, designed to provide users with a seamless dashboard experience. This project leverages the power of Vue 3, Pinia for state management, and Vue Router for navigation, all bundled together with Vite for fast development and building.

The application features a clean, modular architecture that separates core functionality from feature-specific components. It includes authentication flows, a user dashboard, and a landing page, all styled with Tailwind CSS for a sleek, customizable UI.

## Repository Structure

```
.
├── src/
│   ├── core/
│   │   ├── NotFound/
│   │   ├── router.ts
│   │   ├── styles/
│   │   ├── user/
│   │   └── [...]
│   ├── features/
│   │   ├── Auth/
│   │   ├── Dashboard/
│   │   ├── HelloWorld/
│   │   ├── LandingPage/
│   │   └── [...]
│   ├── App.vue
│   ├── main.ts
│   ├── tailwind.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Key Files:
- `src/main.ts`: Application entry point
- `src/App.vue`: Root Vue component
- `src/core/router.ts`: Vue Router configuration
- `vite.config.ts`: Vite build tool configuration
- `package.json`: Project metadata and dependencies
- `tailwind.config.js`: Tailwind CSS configuration
- `core/*`: Core application fiels that are used across mutiple feature slices
- `feature/*`: Feature slices, the app should be able to build and function with any of these removed. If not then the code should be reviewed, removed or sparingly moved to core

## Usage Instructions

### Installation

Prerequisites:
- Node.js (version 14 or later)
- npm (version 6 or later)

To install the project dependencies, run:

```bash
npm install
```

### Getting Started

To start the development server:

```bash
npm run dev
```

This will start the Vite development server on port 5000. Open your browser and navigate to `http://localhost:5000` to view the application.

### Building for Production

To build the application for production:

```bash
npm run build
```

This command will create a production-ready build in the `dist` directory.

### Configuration

The application uses several configuration files:

- `vite.config.ts`: Configure Vite settings and plugins
- `tsconfig.json`: TypeScript compiler options
- `tailwind.config.js`: Tailwind CSS customization

### Common Use Cases

1. Navigating the application:
   The application uses Vue Router for navigation. Routes are defined in `src/core/router.ts`.

2. Managing state:
   Pinia stores are used for state management. Example stores can be found in:
   - `src/core/user/stores/user.store.ts`
   - `src/features/auth/stores/auth.store.ts`

3. Adding new features:
   New features should be added under the `src/features` directory, following the existing structure.

### Testing & Quality

Currently, no testing setup is provided in the repository. If you'd like to start then be my guest!

### Troubleshooting

1. Issue: Application fails to start
   - Ensure all dependencies are installed: `npm install`
   - Check for any TypeScript errors: `vue-tsc --noEmit`
   - Verify that the Vite configuration in `vite.config.ts` is correct

2. Issue: Routing doesn't work as expected
   - Review the router configuration in `src/core/router.ts`
   - Check that all route components are correctly imported and defined

3. Issue: Styles are not applied
   - Ensure Tailwind CSS is properly configured in `postcss.config.js` and `tailwind.config.js`
   - Verify that `tailwind.css` is imported in `src/main.ts`

For debugging, you can enable Vue DevTools in your browser to inspect component state and Pinia stores.

## Data Flow

The LanLink Web App follows a typical Vue.js application data flow:

1. User interacts with the UI (Vue components)
2. Components dispatch actions or mutate state in Pinia stores
3. Stores update their state and trigger re-renders of affected components
4. Router handles navigation between different views

```
[User Input] -> [Vue Component] -> [Pinia Store Action]
                      ^                    |
                      |                    v
               [Updated UI] <- [State Change] <- [API Call (if needed)]
```

Important technical considerations:
- Use Pinia stores for shared state across components
- Leverage Vue's reactivity system for efficient updates
- Utilize Vue Router navigation guards for protected routes