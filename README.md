# Ecommerce Website

## Project Description

A modern, responsive e-commerce front-end application built with React. The project provides a full shopping experience including product listing, product details, user authentication (sign up / sign in), and protected routes for contact and about pages. It consumes the [Routemisr](https://ecommerce.routemisr.com/) API for products and auth.

## Live Demo

<!-- Add your live demo URL here (e.g. Vercel, Netlify) -->

## Tech Stack

- **Framework:** React 19
- **Build tool:** Vite 7
- **Routing:** React Router 7
- **State management:** Redux Toolkit
- **HTTP client:** Axios
- **Styling:** Tailwind CSS, DaisyUI, Styled Components
- **Forms:** React Hook Form
- **Icons:** React Icons
- **Other:** react-simple-star-rating

## Features

- **Home / product listing** — Paginated product grid with toolbar and banner
- **Product details** — Single product view with image gallery, quantity selector, info, and tabs
- **Authentication** — Sign up and sign in with token-based auth
- **Protected routes** — Contact and About pages require login
- **Layout** — Shared Navbar and Footer with nested routing
- **Error handling** — 404 and route error page
- **Loading states** — Loader component for async views

## Folder Structure

```
Ecommerce_Website/
├── public/
│   └── vite.svg
├── src/
│   ├── Api/
│   │   ├── auth.js
│   │   ├── axiosInstance.js
│   │   └── products.Api.js
│   ├── assets/
│   │   └── images/
│   ├── Components/
│   │   ├── common/          # Reusable (CustomRating, FormField, ImagePopup, etc.)
│   │   ├── Layout/          # Navbar, Footer, Pagination, ProductsCart, ShopPanner, ShopToolBar
│   │   ├── loading/
│   │   └── product/         # ProductColors, ProductDetailsTabs, ProductInfo, ProductSize
│   ├── Pages/
│   │   ├── About/
│   │   ├── Cart/
│   │   ├── Categories/
│   │   ├── ContactUs/
│   │   ├── Favourit/
│   │   ├── Home/
│   │   ├── ProductDetails/
│   │   ├── Products/
│   │   ├── Shop/
│   │   ├── SignIn/
│   │   └── SignUp/
│   ├── Routes/
│   │   ├── App_routes/
│   │   ├── error/
│   │   ├── Layout/
│   │   └── Private/         # ProtectedRoute
│   ├── Store/
│   │   ├── index.js
│   │   └── Slices/
│   │       ├── auth.js
│   │       └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Ecommerce_Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   The app will be available at the URL shown in the terminal (typically `http://localhost:5173`).

## Environment Variables

The application currently uses a hardcoded API base URL (`https://ecommerce.routemisr.com/api/v1/`) in `src/Api/axiosInstance.js`. No `.env` file is required to run the project.

Optional: you can introduce environment variables for the API base URL (e.g. `VITE_API_BASE_URL`) and add a `.env.example` for documentation. Ensure any env vars used in the front end are prefixed with `VITE_` when using Vite.

## Available Scripts

| Script            | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start Vite dev server      |
| `npm run build`   | Build for production       |
| `npm run preview` | Preview production build   |
| `npm run lint`    | Run ESLint on the codebase |

## Team Members

- [Mohamed Mokhtar](https://www.linkedin.com/in/mohamed-mokhtar-850148256/)
- [Hadeer Aly](https://www.linkedin.com/in/hadeer-aly/)
- [Mohamed Elfeky](https://www.linkedin.com/in/mohamed-elfeky-544274292/)
- [Safa Mousa](https://www.linkedin.com/in/safa-mousa-b80671232/)
- [Ahmed Hany](https://www.linkedin.com/in/ahmedhanyh)

## Contributing Guidelines

1. Create a feature branch from the default branch (e.g. `feature/your-feature-name`).
2. Follow the existing code style and project structure.
3. Run `npm run lint` before submitting changes.
4. Ensure new functionality is tested where applicable.
5. Submit a pull request with a clear description of changes.

