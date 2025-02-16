const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"; // Default to localhost if env is missing

export async function login(empId: string, password: string) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ empId, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Login failed");
    }

    return res.json(); // Expected response: { token, user }
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}

export async function getUserProfile(token: string) {
  try {
    const res = await fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }, // Correctly formatted Bearer token
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to fetch profile");
    }

    return res.json(); // Expected response: { role, email, ... }
  } catch (error) {
    console.error("Profile Fetch Error:", error);
    throw error;
  }
}
