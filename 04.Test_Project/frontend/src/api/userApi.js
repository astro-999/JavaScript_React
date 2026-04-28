const API_BASE = 'http://localhost:8000/api/users';

// GET all users
export async function getUsers() {
  const res = await fetch(`${API_BASE}/`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

// GET single user
export async function getUser(id) {
  const res = await fetch(`${API_BASE}/${id}/`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

// POST create user
export async function createUser(data) {
  const res = await fetch(`${API_BASE}/create/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(JSON.stringify(err));
  }
  return res.json();
}

// PUT update user
export async function updateUser(id, data) {
  const res = await fetch(`${API_BASE}/${id}/update/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(JSON.stringify(err));
  }
  return res.json();
}

// DELETE user
export async function deleteUser(id) {
  const res = await fetch(`${API_BASE}/${id}/delete/`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete user');
  return true;
}