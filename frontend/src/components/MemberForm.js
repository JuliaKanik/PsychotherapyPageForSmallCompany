import React, { useState, useEffect } from 'react';

function MemberForm({ onSubmit, onCancel, memberToEdit }) {
  const [member, setMember] = useState({
    name: '',
    education: '',
    imageSrc: '',
    link: '',
  });

  useEffect(() => {
    if (memberToEdit) {
      // If memberToEdit is provided, populate the form with its data for editing
      setMember(memberToEdit);
    }
  }, [memberToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(member);
  };

  return (
    <div>
      <h2>{memberToEdit ? 'Edit Member' : 'Add Member'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={member.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="education">Education:</label>
          <input
            type="text"
            id="education"
            name="education"
            value={member.education}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="imageSrc">Image URL:</label>
          <input
            type="text"
            id="imageSrc"
            name="imageSrc"
            value={member.imageSrc}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            id="link"
            name="link"
            value={member.link}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">{memberToEdit ? 'Update' : 'Add'}</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default MemberForm;
