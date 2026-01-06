import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";

// Temporary placeholders (replace later with real pages)
function Login() {
  return (
    <div className="min-h-[60vh] bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Login</h1>
        <p className="mt-1 text-sm text-slate-600">Login page UI will be added here.</p>
      </div>
    </div>
  );
}

function Register() {
  return (
    <div className="min-h-[60vh] bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <p className="mt-1 text-sm text-slate-600">Register page UI will be added here.</p>
      </div>
    </div>
  );
}

function PagePlaceholder({ title }) {
  return (
    <div className="min-h-[60vh] bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="mt-1 text-sm text-slate-600">Build this page next.</p>
      </div>
    </div>
  );
}

// Shared layout wrapper (good for header/footer later)
function Layout() {
  return (
    // Key fix: stops horizontal overflow / right-side blank gap
    <div className="min-h-screen w-full overflow-x-hidden">
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Layout route: child pages render inside <Outlet /> */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/rides/search" element={<PagePlaceholder title="Search rides" />} />
        <Route path="/rides/request" element={<PagePlaceholder title="Request a ride" />} />
        <Route path="/rides/book" element={<PagePlaceholder title="Book a ride" />} />
        <Route path="/rides/create" element={<PagePlaceholder title="Post a ride" />} />

        {/* Catch-all: redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
