# **Legal Document Search Portal - Frontend**

## **Project Overview**

This frontend is a modern React interface that allows users to search and summarize their legal documents using the mock backend API. It is **fully warning-free** and professional with **Ant Design** components.

---

## **Tech Stack**

- React 19
- Redux Toolkit
- Axios
- Ant Design
- Vite

---

## **Project Structure**

```
frontend/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   └── ResultList.jsx
│   ├── features/
│   │   └── searchSlice.js
│   └── store/
│       └── index.js
├── package.json
└── package-lock.json
```

---

## **Setup Instructions**

### 1️⃣ Navigate to frontend

```bash
cd Legal-Document-Search-Portal/frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

### 4️⃣ Access in Browser

```
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
