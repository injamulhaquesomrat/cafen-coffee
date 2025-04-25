# Cafen Coffee React Template

Welcome to the **Cafen Coffee React Template**! This template is designed to help you quickly set up a modern and responsive coffee shop website. Below, you'll find instructions on how to set up, customize, and understand the third-party libraries used in this project.

---

## Features
- Fully responsive design
- Modern UI/UX
- Easy customization
- Built with React.js
- Integration with popular third-party libraries

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/injamulhaquesomrat/cafen-coffee.git
    cd cafen-coffee
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## Customization

### Updating Content
1. Navigate to the `src/components` directory.
2. Edit the respective component files (e.g., `Header.js`, `Menu.js`, `Footer.js`) to update text, images, or links.

### Styling
- All styles are located in the `src/styles` directory.
- Modify the `index.css` or component-specific styles to customize the design.

### Adding New Pages
1. Create a new component in the `src/pages` directory.
2. Add a route for the new page in `src/App.js`.

### Adding Custom Fonts
1. Add your font files to the `public/fonts` directory.
2. Update the `index.css` file to include the font-face declarations:
    ```css
    @font-face {
        font-family: 'CustomFont';
        src: url('/fonts/CustomFont.woff2') format('woff2'),
             url('/fonts/CustomFont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    ```
3. Use the custom font in your components:
    ```css
    body {
        font-family: 'CustomFont', sans-serif;
    }
    ```

### Updating Theme Colors
1. Open the `src/styles/theme.css` file.
2. Modify the CSS variables to update the theme colors:
    ```css
    :root {
        --primary-color: #6b4e16;
        --secondary-color: #f4e1d2;
        --accent-color: #d4a373;
    }
    ```


---

## Third-Party Libraries
This project leverages several third-party libraries to enhance functionality and streamline development:

1. **React Router**  
    - Used for handling routing in the application.
    - Enables navigation between different pages without reloading the browser.
    - Documentation: [React Router](https://reactrouter.com/)

2. **Splide.js**  
    - A lightweight, flexible slider/carousel library.
    - Used for creating responsive and touch-friendly sliders.
    - Documentation: [Splide.js](https://splidejs.com/)

3. **React Helmet**  
    - A library for managing the document head.
    - Allows you to dynamically set meta tags, titles, and other head elements.
    - Documentation: [React Helmet](https://github.com/nfl/react-helmet)

4. **React Icons**  
    - Provides a collection of popular icons as React components.
    - Makes it easy to integrate icons into your application.
    - Documentation: [React Icons](https://react-icons.github.io/react-icons/)

5. **Yet Another React Lightbox**  
    - A modern and customizable lightbox library for React.
    - Used for displaying images or galleries in an overlay.
    - Documentation: [Yet Another React Lightbox](https://yet-another-react-lightbox.com/)


---

## Deployment
1. Build the project:
    ```bash
    npm run build
    # or
    yarn build
    ```

2. Deploy the `build` folder to your hosting provider (e.g., Netlify, Vercel).

---

## Live Demo
Check out the live demo of the Cafen Coffee React Template: [Live Demo](https://cafen-coffee-inj.netlify.app)

## Support
If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/injamulhaquesomrat/cafen-coffee).

---

Thank you for using the Cafen Coffee React Template!  