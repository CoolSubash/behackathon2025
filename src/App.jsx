import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthSlider } from "./ pages/AuthSlider";
// import { SignupPage } from "./pages/SignupPage";
// import { ToastTray } from "./components/Toast";
// import { AuthProvider } from "./context/AuthContext";
// import { ToastProvider } from "./context/ToastContext";

/* The `const Placeholder` is a functional component in React that takes a prop `title`. It returns a
JSX structure that includes a `div` element with padding, an `h2` element displaying the `title`
prop with specific styling for font weight and color, and a `p` element with a message "Coming
soon..." styled in a different color. */
// const Placeholder = ({ title }) => (
//   <div style={{ padding: 40 }}>
//     <h2 style={{ fontWeight: 800, color: "var(--brand)" }}>{title}</h2>
//     <p style={{ color: "var(--gray)" }}>Coming soon…</p>
//   </div>
// );

export default function App() {
  return (
   
        <Routes>
          <Route path="/" element={<AuthSlider />} />
          <Route path="/login" element={<AuthSlider />} />
          <Route path="/signup" element={<AuthSlider />} />
          {/* <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<Placeholder title="About us" />} />
          <Route path="/blog" element={<Placeholder title="Blog" />} />
          <Route path="/pricing" element={<Placeholder title="Pricing" />} /> */}
        </Routes>
       
  );
}
