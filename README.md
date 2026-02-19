# ⚛️ TaskHive Frontend

<div align="center">

![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-06B6D4?style=for-the-badge&logo=tailwind-css)
![React Router](https://img.shields.io/badge/React_Router-6.0-CA4245?style=for-the-badge&logo=react-router)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Modern, responsive task management interface** 🎨

A blazing-fast React 18 frontend with TypeScript, Vite, and Tailwind CSS for the TaskHive platform.

[**Frontend Repository**](https://github.com/Kristannnnn/TASKHIVE-FRONTEND) · [**Report Bug**](https://github.com/Kristannnnn/TASKHIVE-FRONTEND/issues) · [**Request Feature**](https://github.com/Kristannnnn/TASKHIVE-FRONTEND/issues)

</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🏗️ Architecture](#-architecture)
- [📋 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🛠️ Installation](#-installation)
- [⚙️ Configuration](#-configuration)
- [🚀 Running the App](#-running-the-app)
- [🧩 Components](#-components)
- [🎯 Pages](#-pages)
- [🗂️ State Management](#-state-management)
- [🚦 Routing](#-routing)
- [🎨 Styling](#-styling)
- [📡 API Integration](#-api-integration)
- [🧪 Testing](#-testing)
- [📦 Build & Deployment](#-build--deployment)
- [🆘 Support](#-support)
- [👥 Authors](#-authors)

---

## ✨ Features

### 🎯 User Interface

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Skeleton Loaders** - Smooth loading states with animated placeholders
- **Modal Notifications** - User feedback via success/error modals
- **Form Validation** - Real-time input validation with helpful messages
- **Password Toggles** - Show/hide password visibility controls
- **Dark Mode Ready** - Tailwind CSS foundation for dark mode

### 🔐 Authentication

- User registration with email validation (@required)
- Secure login with JWT tokens
- Password strength validation (8+ chars, uppercase, numbers, special chars)
- Password reset via email
- Password change functionality
- Protected routes (redirect to login if not authenticated)

### 📋 Task Management

- Create tasks in categories (Personal, Daily, Work, Other)
- View tasks by category with real-time updates
- Mark tasks as completed
- Archive completed tasks
- Delete tasks with confirmation modal
- Responsive task list with icons

### 🎨 User Experience

- Email validation with immediate feedback
- Form error clearing on input change
- Loading states with "Sending..." feedback
- Real-time form validation
- Smooth page transitions
- Professional modal dialogs
- Icon-rich interface with React Icons

### ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels on interactive elements
- Color contrast compliance
- Focus management in modals

---

## 🏗️ Architecture

### Application Flow

```
App.tsx (Entry)
    ↓
Router (React Router v6)
    ↓
Layout/Pages (Protected/Public Routes)
    ↓
Components (Reusable UI blocks)
    ↓
State (Zustand auth store)
    ↓
API (Axios instance)
    ↓
Backend
```

### State Management Flow

```
User Action
    ↓
Component (useState/useEffect)
    ↓
Auth Store (Zustand) OR Local State
    ↓
API Call (Axios)
    ↓
Response Handling
    ↓
State Update
    ↓
Re-render Component
```

---

## 📋 Tech Stack

| Layer           | Technology                     | Purpose                             |
| --------------- | ------------------------------ | ----------------------------------- |
| **Framework**   | React 18                       | Modern UI library with hooks        |
| **Language**    | TypeScript                     | Type-safe development               |
| **Build Tool**  | Vite                           | Ultra-fast development & builds     |
| **Styling**     | Tailwind CSS                   | Utility-first CSS framework         |
| **Routing**     | React Router v6                | Client-side routing & nested routes |
| **State**       | Zustand                        | Lightweight state management        |
| **HTTP Client** | Axios                          | Promise-based API requests          |
| **Icons**       | React Icons                    | Beautiful icon library              |
| **Linting**     | ESLint                         | Code quality & consistency          |
| **Formatting**  | Prettier                       | Code formatting                     |
| **Testing**     | Vitest + React Testing Library | Unit & component testing            |

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── global/          # Global components
│   │   │   ├── buttons/
│   │   │   │   ├── Buttons.tsx          # Base button
│   │   │   │   └── PrimaryButton.tsx    # Primary CTA button
│   │   │   │
│   │   │   ├── inputs/
│   │   │   │   ├── AppHeader.tsx           # Top navigation
│   │   │   │   ├── InputField.tsx          # Text input component
│   │   │   │   ├── PrimaryTextLabel.tsx    # Primary text labels
│   │   │   │   ├── SecondaryTextLabel.tsx  # Secondary text labels
│   │   │   │   └── TaskField.tsx           # Task display component
│   │   │   │
│   │   │   ├── notifications/
│   │   │   │   └── feedbacks/
│   │   │   │       ├── NotifOnlyModal.tsx  # Info/error modal
│   │   │   │       └── SuccessModal.tsx    # Success modal
│   │   │   │
│   │   │   ├── skeletons/
│   │   │   │   ├── SkeletonLoader.tsx    # Generic skeleton
│   │   │   │   └── TaskSkeleton.tsx      # Task list skeleton
│   │   │   │
│   │   │   ├── routes/
│   │   │   │   ├── ProtectedRoutes.tsx   # Auth-required routes
│   │   │   │   └── PublicRoute.tsx       # Public-only routes
│   │   │
│   │   ├── login/
│   │   │   └── LogInCard.tsx             # Login form
│   │   │
│   │   ├── register/
│   │   │   └── RegisterCard.tsx          # Registration form
│   │   │
│   │   ├── forgotpassword/
│   │   │   └── ForgotPasswordCard.tsx    # Password reset form
│   │   │
│   │   ├── changepassword/
│   │   │   └── ChangePasswordCard.tsx    # Password change form
│   │   │
│   │   └── task/
│   │       ├── AddTaskModal.tsx          # Add/edit task modal
│   │       └── TasksDisplayCard.tsx      # Task display card
│   │
│   ├── pages/                # Page components
│   │   ├── LandingPage.tsx             # Home page
│   │   ├── TermsAndConditionModal.tsx  # Terms modal
│   │   │
│   │   ├── login/
│   │   │   └── LogIn.tsx               # Login page
│   │   │
│   │   ├── signup/
│   │   │   ├── Register.tsx            # Registration page
│   │   │   ├── ForgotPassword.tsx      # Forgot password page
│   │   │   └── ResetPasswordPage.tsx   # Reset password page
│   │   │
│   │   └── dashboard/
│   │       ├── Dashboard.tsx           # Main dashboard
│   │       ├── task/
│   │       │   ├── Category.tsx        # Category selection
│   │       │   └── Task.tsx            # Task list view
│   │       │
│   │       └── archive/
│   │           ├── Archive.tsx         # Archive page
│   │           └── ArchiveCategory.tsx # Archive categories
│   │
│   ├── stores/              # State management
│   │   └── authStore.ts     # Zustand auth store
│   │
│   ├── axios/               # API integration
│   │   └── axios-instance.ts  # Axios configuration
│   │
│   ├── types/               # TypeScript types
│   │   └── TextProps.tsx    # Component prop interfaces
│   │
│   ├── utils/               # Helper functions
│   │   └── [utility files]
│   │
│   ├── assets/              # Images, fonts, etc.
│   ├── App.tsx              # Root component
│   ├── index.css            # Global styles
│   └── main.tsx             # App entry point
│
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
├── eslint.config.js         # ESLint rules
├── package.json             # Dependencies
└── README.md               # This file
```

---

## 🛠️ Installation

### Prerequisites

- **Node.js** v14 or higher
- **npm** or **yarn** package manager
- **Backend Running** - Ensure backend API is running on `http://localhost:5000`

### Step 1: Clone Repository

```bash
git clone https://github.com/Kristannnnn/TASKHIVE-FRONTEND.git
cd TASKHIVE-FRONTEND
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

```bash
# Copy example to .env file
cp .env.example .env

# Edit .env with your configuration
nano .env  # or use your editor
```

### Step 4: Start Development Server

```bash
npm run dev
```

App will be running at: `http://localhost:5173`

---

## ⚙️ Configuration

### Frontend Environment Variables

Create `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000

# App Metadata
VITE_APP_NAME=TaskHive
VITE_APP_VERSION=1.0.0

# Optional: Analytics, Sentry, etc.
# VITE_SENTRY_DSN=your_sentry_dsn
# VITE_ANALYTICS_ID=your_analytics_id
```

### Vite Configuration

The `vite.config.ts` is pre-configured with:

- ✅ React plugin for JSX/TSX
- ✅ TypeScript support
- ✅ HMR (Hot Module Replacement)
- ✅ Optimized build output

---

## 🚀 Running the App

### Development Mode

```bash
npm run dev

# Output:
# ➜  Local:   http://localhost:5173/
# ➜  press h to show help
```

### Build for Production

```bash
npm run build

# Creates optimized dist/ folder
```

### Preview Production Build

```bash
npm run preview

# Test production build locally
```

### Type Checking

```bash
npm run typecheck

# or
tsc --noEmit
```

### Linting

```bash
npm run lint

# Fix linting issues
npm run lint:fix
```

---

## 🧩 Components

### Global Components

#### InputField.tsx

- Reusable text input component
- Props: `label`, `value`, `onChange`, `type`, `error`, `placeholder`
- Features: Error display, disabled state, type-safe

#### TaskField.tsx

- Display completed/pending tasks
- Props: `task`, `onDelete`, `hideEdit`, `onEdit`
- Features: Checkbox, delete button, edit button (conditional)

#### PrimaryButton.tsx

- Main call-to-action button
- Props: `title`, `onClick`, `disabled`, `loading`
- Features: Loading state, disabled state, responsive

#### Buttons.tsx

- Secondary button variants
- Props: Similar to PrimaryButton
- Features: Different styling for secondary actions

#### Modal Components

- **NotifOnlyModal.tsx** - Error/info notifications
- **SuccessModal.tsx** - Success feedback with auto-close

#### Skeleton Components

- **SkeletonLoader.tsx** - Generic loading placeholder
- **TaskSkeleton.tsx** - Task list loading skeleton

### Authentication Components

#### RegisterCard.tsx

**Features:**

- Email validation (@required)
- Password strength meter (8+ chars, uppercase, numbers, special)
- Show/hide password toggle
- Terms acceptance checkbox
- Error & success modals
- API error handling

#### LogInCard.tsx

**Features:**

- Email validation
- Password input
- Show/hide password toggle
- Error handling
- Forgot password link

#### ForgotPasswordCard.tsx

**Features:**

- Email validation
- Loading state ("Sending..." text)
- Error message display
- Auto-clear errors on typing
- Backend error message integration
- Success modal with redirect

#### ChangePasswordCard.tsx

**Features:**

- Current password verification
- New password strength validation
- Password toggle inputs
- Success modal
- Error handling

### Task Components

#### TasksDisplayCard.tsx

- Display tasks in a card layout
- Shows task name with icons
- Responsive grid layout

#### AddTaskModal.tsx

- Modal for creating/editing tasks
- Category selection dropdown
- Task name input
- Add/Cancel buttons

---

## 🎯 Pages

### Landing Page

- Welcome message
- Call-to-action buttons
- Links to register/login

### Authentication Pages

#### Register Page

- Full registration flow
- Terms and conditions modal
- Email validation
- Password strength requirements
- Success → redirect to login

#### LogIn Page

- Email/password login
- Forgot password link
- Success → redirect to dashboard

#### Forgot Password Page

- Email submission
- Email validation
- Success → check email message
- Error handling

#### Reset Password Page

- Password reset with token
- New password update
- Success → redirect to login

### Dashboard

- Main task management hub
- Navigation to categories
- User menu
- Logout functionality

### Task Pages

#### Category Page

- Select task category (Personal, Daily, Work, Other)
- Display all tasks in category
- Add new task button
- Edit/delete task options
- Loading skeleton

#### Task Page

- Display tasks from selected category
- Show task completion status
- Mark complete (checkbox)
- Delete task
- Archive completed tasks
- Loading states

### Archive Pages

#### Archive Page

- View completed/archived tasks
- Category selection
- Delete archived tasks
- Task skeleton loader
- No edit functionality

#### ArchiveCategory Page

- Select archive category
- Display archived tasks
- Loading skeleton

---

## 🗂️ State Management

### Zustand Auth Store (`authStore.ts`)

**State:**

- user: { email: string; userId: string } | null
- token: string | null
- isLoggedIn: boolean

**Actions:**

- setUser(user)
- setToken(token)
- logout()
- setIsLoggedIn(status)

### Usage Example

```typescript
import { useAuthStore } from '@/stores/authStore';

function MyComponent() {
  const { user, isLoggedIn, setUser } = useAuthStore();

  return (
    <div>
      {isLoggedIn ? `Hello, ${user?.email}` : 'Please log in'}
    </div>
  );
}
```

### Local Component State

- Form inputs: `useState`
- Modal visibility: `useState`
- Loading states: `useState`
- Error messages: `useState`

---

## 🚦 Routing

### Route Structure

```
/
├── /                      # Landing page
├── /login                 # Login page
├── /register              # Registration page
├── /forgot-password       # Password reset request
├── /reset-password/:token # Password reset form
│
├── /dashboard (Protected)
│   ├── /dashboard/task
│   │   ├── /category      # Select task category
│   │   └── /task/:id      # View tasks in category
│   │
│   └── /dashboard/archive
│       ├── /category      # Select archive category
│       └── /archive/:id   # View archived tasks
│
└── 404                    # Not found
```

### Protected Routes

Routes wrapped in `<ProtectedRoutes>` redirect to `/login` if not authenticated.

```typescript
<ProtectedRoutes>
  <Dashboard />
</ProtectedRoutes>
```

### Public Routes

Routes wrapped in `<PublicRoute>` redirect to `/dashboard` if already logged in

```typescript
<PublicRoute>
  <LogIn />
</PublicRoute>
```

---

## 🎨 Styling

### Tailwind CSS

All styling uses **Tailwind utility classes**:

```tsx
<button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
  Click Me
</button>
```

### Design Tokens

```
Colors:
- Primary: Blue (bg-blue-500)
- Success: Green (bg-green-500)
- Error: Red (bg-red-500)
- Neutral: Gray (bg-gray-200, bg-gray-400)

Spacing: 4px base unit (px-4 = 16px)
Border Radius: 8px, 12px, 16px, 24px
Box Shadow: Standard elevation
```

### Responsive Breakpoints

```
sm: 640px   → tablet
md: 768px   → landscape tablet
lg: 1024px  → desktop
xl: 1280px  → wide desktop
```

---

## 📡 API Integration

### Axios Instance (`axios-instance.ts`)

```typescript
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor adds JWT token to requests
axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### API Calls Example

```typescript
// Register
await axiosInstance.post("/api/users", { email, password });

// Login
const res = await axiosInstance.post("/api/login", { email, password });
const { token, userId } = res.data;

// Get tasks
const tasks = await axiosInstance.get(`/api/tasks/${category}`);

// Create task
await axiosInstance.post("/api/tasks", { taskName, category });

// Update task
await axiosInstance.put(`/api/tasks/${taskId}`, { isCompleted: true });

// Delete task
await axiosInstance.delete(`/api/tasks/${taskId}`);
```

---

## 🧪 Testing

### Run Tests

```bash
npm run test
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Testing Patterns

```typescript
// Component test example
describe("LoginCard", () => {
  it("should validate email format", () => {
    // Test implementation
  });

  it("should submit login form", async () => {
    // Test implementation
  });
});
```

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build

# Creates optimized dist/ folder
```

### Preview Build Locally

```bash
npm run preview
```

### Deploy to Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Set environment variables in Vercel dashboard
# VITE_API_BASE_URL = https://your-backend-api.com
```

### Deploy to Netlify

```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Deploy
netlify deploy --prod

# 3. Configure build settings
# Build command: npm run build
# Publish directory: dist
```

### Deploy to GitHub Pages

```bash
# Update vite.config.ts
export default {
  base: '/TASKHIVE-FRONTEND/',
}

# Deploy
npm run build
# Push dist/ to gh-pages branch
```

---

## 🆘 Support

### Get Help

- 📧 **Email**: [support@taskhive.com](mailto:support@taskhive.com)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/Kristannnnn/TASKHIVE-FRONTEND/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Kristannnnn/TASKHIVE-FRONTEND/discussions)

### Common Issues

**Q: API requests returning 404**

> Make sure backend is running on `http://localhost:5000` and `VITE_API_BASE_URL` is set correctly.

**Q: "Cannot find module" errors**

> Run `npm install` and restart dev server: `npm run dev`

**Q: TypeScript errors on build**

> Run `npm run typecheck` to see all errors. Fix them before building.

**Q: Styling not applying**

> Clear cache: `rm -rf node_modules/.vite` and reload page with Shift+F5 (hard refresh).

---

## 👥 Authors

### Core Team

| Name              | Role                 | GitHub                                         |
| ----------------- | -------------------- | ---------------------------------------------- |
| **Kristan James** | Full Stack Developer | [@Kristannnnn](https://github.com/Kristannnnn) |

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](../LICENSE) file for more details.

---

<div align="center">

### 🎨 Frontend brings TaskHive to life!

Made with 💖 by [Kristan James](https://github.com/Kristannnnn)

</div>

---

**Happy Building! ⚛️✨**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
