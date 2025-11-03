# **Legal Document Search Portal - Frontend**

## **Project Overview**

This is the **frontend application** for the Legal Document Search Portal.  
It provides a clean, modern interface to search and display legal documents and summaries.

---

## **Features**

- Built with **React + Redux Toolkit + Ant Design**
- Beautiful UI components with search bar & result cards
- Responsive layout
- Docker support for deployment

---

## **Tech Stack**

- React.js (Vite)
- Redux Toolkit
- Ant Design (UI)
- Axios
- Docker

---

## **Setup Instructions**

### Clone the Repository

```bash
https://github.com/shadeshsaha/Legal-Document-Search-Portal-Frontend.git
```

### 1️⃣ Navigate to frontend

```bash
cd Legal-Document-Search-Portal/frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run Locally

```bash
npm run dev
```

### 4️⃣ Access in Browser

```
http://localhost:5173/
```

---

### 🐳 Run with Docker

### 1️⃣ Build Docker Image

```bash
docker build -t legal-frontend .
```

### 2️⃣ Run the Container

```bash
docker run -p 3000:3000 legal-frontend
```

### 3️⃣ Access the App

```bash
http://localhost:5173/
```

---

## **Environment Variables**

Currently, the frontend connects to `http://localhost:4000` for the mock backend.

> **Advanced tip:** Use `.env` file for configurable API endpoints:

```
VITE_API_URL=http://localhost:4000/api/generate
```

And access in code via:

```js
const API_URL = import.meta.env.VITE_API_URL;
```

---

## **Features**

- **Search Input**: Uses `Input.Search` from Ant Design
- **Results List**: Displays cards with document title and summary
- **Loading State**: Shows spinner while fetching results
- **Error Handling**: Alerts on errors or empty results
- Fully warning-free: No deprecated React or Ant Design props

---

## **Advanced Tips & Troubleshooting**

1. **Enter Key Warning**: Ensure `Input.Search` is used instead of deprecated `onKeyPress`.
2. **CORS Issues**: Make sure backend is running and `cors()` is enabled.
3. **API URL Change**: Update `fetchResults` in `searchSlice.js` if backend URL differs.
4. **Empty Result Handling**: Alerts automatically show “No results yet.”
5. **Ant Design Styling**: Use `style` or `className` for custom card appearance.

---

## **Usage**

1. Start backend server first (`localhost:4000`).
2. Start frontend server (`localhost:5173`).
3. Type query → press Enter or click Search → results displayed in cards with summary.
4. Spinner appears while fetching, alerts for errors.

---
