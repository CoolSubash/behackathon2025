import React, { useState } from "react";
import "../styles/auth.css";

/**
 * AuthSlider (UI only)
 * - double-slider animation for login & signup
 * - signup includes full name, email, phone, password
 * - overlay uses full background image
 */
export const AuthSlider = () => {
  const [mode, setMode] = useState("login");
  const isSignup = mode === "signup";

  // login fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // signup fields
  const [fullName, setFullName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupError, setSignupError] = useState(null);
  const [signupLoading, setSignupLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoginError(null);
    setLoginLoading(true);
    // simulate later api call
    setTimeout(() => setLoginLoading(false), 1000);
  }

  async function handleSignup(e) {
    e.preventDefault();
    setSignupError(null);
    setSignupLoading(true);
    // simulate later api call
    setTimeout(() => setSignupLoading(false), 1000);
  }

  const bgUrl = "/img/charlotte.jpg"; // ensure you have public/img/charlotte.jpg

  return (
    <div
      className={`slider-container ${isSignup ? "right-panel-active" : ""}`}
      style={{ ["--overlay-bg"]: `url(${bgUrl})` }}
    >
      {/* ==== SIGN UP ==== */}
      <div className="form-container sign-up-container">
        <form className="slider-form" onSubmit={handleSignup}>
          <h2>Create Account</h2>
          {signupError && <div className="error-banner">{signupError}</div>}

          <label className="label" htmlFor="signup-name">Full Name</label>
          <input
            id="signup-name"
            className="input"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label className="label" htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            className="input"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />

          <label className="label" htmlFor="signup-phone">Phone</label>
          <input
            id="signup-phone"
            type="tel"
            className="input"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label className="label" htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            className="input"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />

          <button className="btn" type="submit" disabled={signupLoading}>
            {signupLoading ? "Creating..." : "Sign Up"}
          </button>
        </form>
      </div>

      {/* ==== SIGN IN ==== */}
      <div className="form-container sign-in-container">
        <form className="slider-form" onSubmit={handleLogin}>
          <h2>Sign In</h2>
          {loginError && <div className="error-banner">{loginError}</div>}

          <label className="label" htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            className="input"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />

          <label className="label" htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            className="input"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />

          <button className="btn" type="submit" disabled={loginLoading}>
            {loginLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>

      {/* ==== OVERLAY ==== */}
      <div className="overlay-container">
        <div className="overlay">
          {/* left overlay (signup mode) */}
          <div className="overlay-panel overlay-left with-bg">
            <div className="welcome">
              <h2 className="welcome-title">Welcome Back!</h2>
              <p className="welcome-sub">
                To keep connected with us please login with your personal info.
              </p>
            </div>
            <button className="ghost-btn" onClick={() => setMode("login")}>
              SIGN IN
            </button>
          </div>

          {/* right overlay (login mode) */}
          <div className="overlay-panel overlay-right with-bg">
            <div className="welcome">
              <h2 className="welcome-title">Create Account</h2>
              <p className="welcome-sub">Join us and start your journey today.</p>
            </div>
            <button className="ghost-btn" onClick={() => setMode("signup")}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
