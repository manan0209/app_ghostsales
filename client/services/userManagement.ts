// services/userManagement.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUserList(): Promise<{ users: any[] }> {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/users/list`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to fetch users");
  }
  return res.json();
}

/**
 * Create a new user.
 * Expects: name, email, and role.
 * The backend will generate the empId automatically.
 */
export async function createUser(
  name: string,
  email: string,
  role: string
): Promise<{ user: any }> {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, email, role }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to create user");
  }
  return res.json();
}

export async function updateUser(
  id: string,
  email: string,
  role: string
): Promise<{ user: any }> {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/users/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, role }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to update user");
  }
  return res.json();
}

export async function deleteUser(
  id: string
): Promise<{ message: string }> {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/users/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to delete user");
  }
  return res.json();
}
