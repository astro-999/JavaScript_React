import { useState, useEffect } from "react";
import EntryList from "./EntryList.jsx";
import { getUsers, createUser, updateUser, deleteUser } from "../api/userApi";

function Operation() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", contact: "" });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  // Load users from database on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      setEntries(data);
    } catch (err) {
      showToast("Failed to load users from server.", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // CREATE
  const handleCreate = async () => {
    if (!form.name || !form.email || !form.contact) {
      showToast("All fields are required.", "error");
      return;
    }
    try {
      setLoading(true);
      const created = await createUser(form);
      setEntries((prev) => [created, ...prev]);
      setForm({ name: "", email: "", contact: "" });
      showToast("Entry added successfully.");
    } catch (err) {
      showToast(err.message || "Failed to create user.", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE - load into form
  const handleEdit = (entry) => {
    setEditingId(entry.id);
    setForm({ name: entry.name, email: entry.email, contact: entry.contact || "" });
  };

  const handleUpdate = async () => {
    if (!form.name || !form.email || !form.contact) {
      showToast("All fields are required.", "error");
      return;
    }
    try {
      setLoading(true);
      const updated = await updateUser(editingId, form);
      setEntries((prev) =>
        prev.map((e) => (e.id === editingId ? updated : e))
      );
      setEditingId(null);
      setForm({ name: "", email: "", contact: "" });
      showToast("Entry updated successfully.");
    } catch (err) {
      showToast(err.message || "Failed to update user.", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm({ name: "", email: "", contact: "" });
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteUser(id);
      setEntries((prev) => prev.filter((e) => e.id !== id));
      if (editingId === id) handleCancel();
      showToast("Entry deleted.", "error");
    } catch (err) {
      showToast("Failed to delete user.", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // SEARCH filter
  const filtered = entries.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase()) ||
      (e.contact || "").includes(search)
  );

  return (
    <div style={styles.page}>

      {/* Toast */}
      {toast && (
        <div
          style={{
            ...styles.toast,
            background: toast.type === "error" ? "#ef4444" : "#22c55e",
          }}
        >
          {toast.msg}
        </div>
      )}

      <div style={styles.wrapper}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Operations</h1>
          <p style={styles.subtitle}>Manage your contact entries (saved to database)</p>
        </div>

        {/* Form Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>
            {editingId ? "✏️ Edit Entry" : "➕ Add New Entry"}
          </h2>

          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                style={styles.input}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                style={styles.input}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Contact Number</label>
              <input
                style={styles.input}
                type="tel"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div style={styles.btnRow}>
            {editingId ? (
              <>
                <button
                  style={{ ...styles.btn, ...styles.btnUpdate }}
                  onClick={handleUpdate}
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Entry"}
                </button>
                <button
                  style={{ ...styles.btn, ...styles.btnCancel }}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                style={{ ...styles.btn, ...styles.btnAdd }}
                onClick={handleCreate}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Entry"}
              </button>
            )}
          </div>
        </div>

        {/* Stats Row + Search */}
        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <span style={styles.statNum}>{entries.length}</span>
            <span style={styles.statLabel}>Total Entries</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statNum}>{filtered.length}</span>
            <span style={styles.statLabel}>Showing</span>
          </div>
          <div style={{ ...styles.statBox, flex: 2 }}>
            <input
              style={{ ...styles.input, margin: 0 }}
              type="text"
              placeholder="🔍  Search by name, email or contact..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* EntryList */}
        {loading && entries.length === 0 ? (
          <p style={{ textAlign: "center", color: "#64748b" }}>Loading users...</p>
        ) : (
          <EntryList
            entries={filtered}
            editingId={editingId}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

      </div>
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    padding: "2rem 1rem",
    fontFamily: "'Segoe UI', sans-serif",
    position: "relative",
  },
  toast: {
    position: "fixed",
    top: "1.2rem",
    right: "1.2rem",
    color: "#fff",
    padding: "0.75rem 1.4rem",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "0.9rem",
    zIndex: 999,
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  wrapper: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  header: { textAlign: "center" },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#1e293b",
    margin: 0,
  },
  subtitle: {
    color: "#64748b",
    margin: "0.3rem 0 0",
    fontSize: "0.95rem",
  },
  card: {
    background: "#ffffff",
    borderRadius: "14px",
    padding: "1.8rem",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  },
  cardTitle: {
    margin: "0 0 1.2rem",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#1e293b",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  formGroup: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  label: { fontSize: "0.82rem", fontWeight: 600, color: "#475569" },
  input: {
    padding: "0.6rem 0.9rem",
    borderRadius: "8px",
    border: "1.5px solid #e2e8f0",
    fontSize: "0.9rem",
    color: "#1e293b",
    outline: "none",
    transition: "border 0.2s",
    background: "#f8fafc",
  },
  btnRow: {
    display: "flex",
    gap: "0.8rem",
    marginTop: "1.2rem",
    flexWrap: "wrap",
  },
  btn: {
    padding: "0.6rem 1.6rem",
    borderRadius: "8px",
    border: "none",
    fontWeight: 700,
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "opacity 0.2s",
  },
  btnAdd:    { background: "#3b82f6", color: "#fff" },
  btnUpdate: { background: "#f59e0b", color: "#fff" },
  btnCancel: { background: "#e2e8f0", color: "#475569" },
  statsRow: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    flexWrap: "wrap",
  },
  statBox: {
    background: "#fff",
    borderRadius: "10px",
    padding: "0.8rem 1.2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    minWidth: "90px",
  },
  statNum:   { fontSize: "1.5rem", fontWeight: 800, color: "#3b82f6" },
  statLabel: { fontSize: "0.75rem", color: "#94a3b8", marginTop: "2px" },
};

export default Operation;