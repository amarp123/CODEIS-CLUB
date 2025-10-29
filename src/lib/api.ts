export const BACKEND_URL = (import.meta as any).env?.VITE_BACKEND_URL || "http://127.0.0.1:8000";

function authHeader(): HeadersInit {
  const token = localStorage.getItem("token");
  const headers: Record<string, string> = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${BACKEND_URL}${path}`, { headers: authHeader() });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function apiPost<T>(path: string, body: any): Promise<T> {
  const baseHeaders: Record<string, string> = { "Content-Type": "application/json" };
  const res = await fetch(`${BACKEND_URL}${path}`, {
    method: "POST",
    headers: { ...baseHeaders, ...(authHeader() as Record<string, string>) },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function apiForm<T>(path: string, form: FormData): Promise<T> {
  const res = await fetch(`${BACKEND_URL}${path}`, {
    method: "POST",
    headers: authHeader(),
    body: form,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function login(email: string, password: string) {
  const form = new URLSearchParams();
  form.set("username", email);
  form.set("password", password);
  const res = await fetch(`${BACKEND_URL}/api/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  localStorage.setItem("token", data.access_token);
}

export async function register(email: string, password: string) {
  await apiPost("/api/auth/register", { email, password });
}

export async function simpleLogin(payload: { email: string; password: string; team_name: string; members: string[] }) {
  const res = await fetch(`${BACKEND_URL}/api/simple/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  if (data?.access_token) localStorage.setItem("token", data.access_token);
  return data;
}
