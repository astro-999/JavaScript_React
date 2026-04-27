import '../css/Form.css';

function EntryList({ entries, editingId, onEdit, onDelete }) {

  if (entries.length === 0) {
    return (
      <div className="entry-list-empty">
        <p>No entries yet. Fill out the form above to add one.</p>
      </div>
    );
  }

  return (
    <div className="entry-list-container">
      <h3 className="entry-list-title">
        Saved Entries ({entries.length})
      </h3>

      <table className="entry-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr
              key={entry.id}
              className={editingId === entry.id ? 'row-editing' : ''}
            >
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.contact}</td>
              <td className="action-buttons">

                {/* EDIT button — triggers READ + pre-fill form */}
                <button
                  className="btn-edit"
                  onClick={() => onEdit(entry)}
                  disabled={editingId === entry.id}
                  title="Edit this entry"
                >
                  {editingId === entry.id ? 'Editing...' : 'Edit'}
                </button>

                {/* DELETE button — removes entry from list */}
                <button
                  className="btn-delete"
                  onClick={() => {
                    if (window.confirm(`Delete ${entry.name}'s entry?`)) {
                      onDelete(entry.id);
                    }
                  }}
                  title="Delete this entry"
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EntryList;