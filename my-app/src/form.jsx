import React, { useState, useEffect } from 'react';
import './form.css';

function Form() {
  // useState for current form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  // useState for the array of saved entries
  const [entries, setEntries] = useState([]);

  // Track which entry is currently selected for editing (null = adding new)
  const [editingId, setEditingId] = useState(null);

  // useEffect: Load saved entries from localStorage on mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('formEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // useEffect: Save entries array to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('formEntries', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // Update existing entry
      setEntries(prev =>
        prev.map(entry =>
          entry.id === editingId
            ? { ...entry, name, email, contact }
            : entry
        )
      );
      setEditingId(null);
    } else {
      // Check for duplicate (same name + email + contact)
      const isDuplicate = entries.some(
        entry =>
          entry.name.toLowerCase() === name.toLowerCase() &&
          entry.email.toLowerCase() === email.toLowerCase() &&
          entry.contact === contact
      );

      if (isDuplicate) {
        alert('This entry already exists!');
        return;
      }

      const newEntry = { id: Date.now(), name, email, contact };
      setEntries(prev => [...prev, newEntry]);
    }

    // Clear form fields after submit
    setName('');
    setEmail('');
    setContact('');
  };

  const handleDelete = (id) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
    // If we're editing this entry, clear the form
    if (editingId === id) {
      setEditingId(null);
      setName('');
      setEmail('');
      setContact('');
    }
  };

  // Click an entry to load it back into the form
  const handleSelect = (entry) => {
    setEditingId(entry.id);
    setName(entry.name);
    setEmail(entry.email);
    setContact(entry.contact);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Contact Us</h2>
        <p className="form-subtitle">We'd love to hear from you. Please fill out this form.</p>

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

          <button type="submit" className="submit-btn">
            {editingId ? 'Update Details' : 'Save Details'}
          </button>
          {editingId && (
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setEditingId(null);
                setName('');
                setEmail('');
                setContact('');
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Display saved entries below the form */}
      {entries.length > 0 && (
        <div className="entries-card">
          <h3 className="entries-title">Saved Entries ({entries.length})</h3>
          <ul className="entries-list">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className={`entry-item ${editingId === entry.id ? 'entry-active' : ''}`}
                onClick={() => handleSelect(entry)}
              >
                <div className="entry-info">
                  <span className="entry-name">{entry.name}</span>
                  <span className="entry-email">{entry.email}</span>
                  <span className="entry-contact">{entry.contact}</span>
                </div>
                <button className="delete-btn" onClick={(e) => { e.stopPropagation(); handleDelete(entry.id); }}>✕</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Form;
