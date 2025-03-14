# Project Summary

The LinkHub project is a modern web application developed as an alternative to Linktree, enabling users to create a visually appealing and personalized landing page. This platform allows digital creators, influencers, and anyone with a diverse online presence to effectively showcase multiple links—whether to social media profiles, personal websites, or content—through customizable buttons. With a focus on aesthetics, LinkHub features a distinct iridescent background that enhances user engagement while maintaining a user-friendly interface.

# Project Module Description

## Features
- **User Profile Section**: Displays the user's avatar, name, and bio with smooth animations and glow effects for enhanced visibility.
- **Customizable Link Buttons**: Users can add links with icons and titles to direct followers to content, complemented by engaging hover animations and glass-morphism effects.
- **Social Media Icons Footer**: Provides quick access to various social platforms using reactive icons that blend seamlessly with the design.
- **Animation Customization**: Offers various animations for both text and buttons, making the interface lively and interactive.
- **Responsive Design**: Ensures a consistent and modern look across all devices.

# Directory Tree

```bash
/data/chats/4kz5w/workspace
+-- react_template
|   +-- README.md
|   +-- WIKI.md
|   +-- eslint.config.js
|   +-- index.html
|   +-- package.json
|   +-- postcss.config.js
|   +-- public
|   |   +-- images
|   |       +-- avatar.jpg
|   +-- src
|   |   +-- App.jsx
|   |   +-- components
|   |   |   +-- Footer.jsx
|   |   |   +-- Iridescence.css
|   |   |   +-- Iridescence.jsx
|   |   |   +-- LinkButton.jsx
|   |   |   +-- Profile.jsx
|   |   |   +-- animations
|   |   |       +-- BlurText.jsx
|   |   |       +-- SplitText.jsx
|   |   +-- index.css
|   |   +-- main.jsx
|   |   +-- utils
|   |       +-- data.js
|   |       +-- themes.js
|   +-- tailwind.config.js
|   +-- template_config.json
|   +-- vite.config.js
+-- uploads
    +-- 0GGUe7KRF7Q.jpg
    +-- COgbRUTvL-s.jpg
```

# File Description Inventory

- `/src/App.jsx` - Main application component that serves as the entry point for rendering the app.
- `/src/components/Profile.jsx` - Displays the user's profile information including avatar, name, and bio with animations.
- `/src/components/LinkButton.jsx` - Component for clickable links with customizable icons and titles.
- `/src/components/Footer.jsx` - Contains social media links and other footer information with responsive design.
- `/src/utils/data.js` - Stores sample user data and link information used within the app.
- `/src/utils/themes.js` - Contains theme configurations that define styles for various themes.
- `/src/components/animations/BlurText.jsx` - Implements blur fade effects for bio text.
- `/src/components/animations/SplitText.jsx` - Implements letter-by-letter reveal effects for the name.

# Technology Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool for providing a fast development environment.
- **TailwindCSS**: Utility-first CSS framework for rapidly building custom designs.
- **React Spring**: Library for animations in React applications.
- **React Icons**: Library for easily using SVG icons in React.

# Usage

## Installation
To install the dependencies, run:
```
pnpm install
```

## Build
To build the production version of the application, execute:
```
pnpm run build
```

## Development
To run the development server, use:
```
pnpm run dev
```

## Linting
To lint the source files, execute:
```
pnpm run lint
```


# INSTRUCTION
- Project Path:`/data/chats/4kz5w/workspace/react_template`
- You can search for the file path in the 'Directory Tree';
- After modifying the project files, if this project can be previewed, then you need to reinstall dependencies, restart service and preview;
