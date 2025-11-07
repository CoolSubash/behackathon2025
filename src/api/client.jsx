// src/api/client.js
export const BASE_URL = "http://localhost:8787"; // change later to your backend
const MOCK = true; // keep true now; flip to false when backend is ready

// async function mockFetch(path, { method, body }) {
//   await new Promise((r) => setTimeout(r, 300));
//   if (path === "/auth/login" && method === "POST") {
//     const { email, password } = body || {};
//     if (!email || !password) throw new Error("Email and password required");
//     if (email === "fail@example.com") throw new Error("Invalid credentials");
//     return { token: "mock-token-123", user: { id: "u1", name: "Demo User", email } };
//   }
//   if (path === "/auth/signup" && method === "POST") {
//     const { name, email, password } = body || {};
//     if (!name || !email || !password) throw new Error("All fields required");
//     return { token: "mock-token-456", user: { id: "u2", name, email } };
//   }
//   throw new Error(`No mock for ${method} ${path}`);
// }

export async function http(path, options = {}) {
  const { method = "GET", body, headers = {} } = options;

//   if (MOCK) return mockFetch(path, { method, body });

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    let msg;
    try { msg = (await res.json())?.message; } catch {}
    throw new Error(msg || `Request failed (${res.status})`);
  }

  try { return await res.json(); } catch { return {}; }
}
