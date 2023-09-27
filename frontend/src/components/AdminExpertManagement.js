import React, { useState } from 'react';
import Experts from './Experts';

const AdminExpertManagement = () => {
  // State to manage the list of experts (initially same as ExpertSection)
  const [experts, setExperts] = useState(Experts.experts);

  // Add functions to edit, delete, and add experts here
  const [newExpert, setNewExpert] = useState({ name: '', education: '' });

  const addExpert = () => {
    if (newExpert.name && newExpert.education) {
      setExperts([...experts, newExpert]);
      setNewExpert({ name: '', education: '' });
    }
  };

  const deleteExpert = (index) => {
    const updatedExperts = [...experts];
    updatedExperts.splice(index, 1);
    setExperts(updatedExperts);
  };
  return (
    <div>
      <h1>Admin Expert Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Education</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {experts.map((expert, index) => (
            <tr key={index}>
              <td>{expert.name}</td>
              <td>{expert.education}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteExpert(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add New Expert</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={newExpert.name}
          onChange={(e) => setNewExpert({ ...newExpert, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="education">Education:</label>
        <textarea
          id="education"
          value={newExpert.education}
          onChange={(e) => setNewExpert({ ...newExpert, education: e.target.value })}
        ></textarea>
      </div>
      <button onClick={addExpert}>Add Expert</button>
    </div>
  );
};

export default AdminExpertManagement;