import React, { useState } from 'react';
import { expertsData } from './Experts.js';

const AdminExpertManagement = () => {
  const [experts, setExperts] = useState(expertsData);
  const [newExpert, setNewExpert] = useState({
    imageSrc: '', // Add image source property
    name: '',
    education: '',
    link: '', // Add link property
  });

  const addExpert = () => {
    if (newExpert.name && newExpert.education && newExpert.imageSrc && newExpert.link) {
      setExperts([...experts, newExpert]);
      setNewExpert({
        imageSrc: '', // Clear image source
        name: '',
        education: '',
        link: '', // Clear link
      });
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
            <th>Image</th>
            <th>Name</th>
            <th>Education</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {experts.map((expert, index) => (
            <tr key={index}>
              <td>
                <img src={expert.imageSrc} alt={expert.name} width="100" height="100" />
              </td>
              <td>{expert.name}</td>
              <td>{expert.education}</td>
              <td>{expert.link}</td>
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
        <label htmlFor="imageSrc">Image URL:</label>
        <input
          type="text"
          id="imageSrc"
          value={newExpert.imageSrc}
          onChange={(e) => setNewExpert({ ...newExpert, imageSrc: e.target.value })}
        />
      </div>
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
      <div>
        <label htmlFor="link">Link:</label>
        <input
          type="text"
          id="link"
          value={newExpert.link}
          onChange={(e) => setNewExpert({ ...newExpert, link: e.target.value })}
        />
      </div>
      <button onClick={addExpert}>Add Expert</button>
    </div>
  );
};

export default AdminExpertManagement;
