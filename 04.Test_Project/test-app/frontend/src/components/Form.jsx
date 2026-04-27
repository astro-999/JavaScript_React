import { useState, useEffect } from 'react';
import EntryList from './EntryList.jsx';
import { getUsers, createUser, updateUser, deleteUser } from '../api/userApi';
import '../css/Form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setError('Failed to load users from server.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      if (editingId) {
        // UPDATE existing user in database
        const updated = await updateUser(editingId, { name, email, contact });
        setEntries(prev =>
          prev.map(entry => (entry.id === editingId ? updated : entry))
        );
        setEditingId(null);
      } else {
        // CREATE new user in database
        const created = await createUser({ name, email, contact });
        setEntries(prev => [created, ...prev]);
      }
      setName('');
      setEmail('');
      setContact('');
    } catch (err) {
      setError(err.message || 'Something went wrong.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Called from EntryList when user clicks Edit
  const handleEdit = (entry) => {
    setEditingId(entry.id);
    setName(entry.name);
    setEmail(entry.email);
    setContact(entry.contact || '');
  };

  // Called from EntryList when user clicks Delete
  const handleDelete = async (id) => {
    setError(null);
    try {
      setLoading(true);
      await deleteUser(id);
      setEntries(prev => prev.filter(entry => entry.id !== id));
      if (editingId === id) {
        setEditingId(null);
        setName('');
        setEmail('');
        setContact('');
      }
    } catch (err) {
      setError('Failed to delete user.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setName('');
    setEmail('');
    setContact('');
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Contact Us</h2>
        <p className="form-subtitle">We'd love to hear from you. Please fill out this form.</p>

        {error && <p className="form-error">{error}</p>}

        <form onSubmit={handleSubmit} className="modern-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Saving...' : editingId ? 'Update Details' : 'Save Details'}
          </button>
          {editingId && (
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Pass entries and handlers down to EntryList */}
      {loading && entries.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>Loading users...</p>
      ) : (
        <EntryList
          entries={entries}
          editingId={editingId}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Form;