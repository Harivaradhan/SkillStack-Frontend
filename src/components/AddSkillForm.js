import React, { useState } from "react";
import axios from "axios";
import "./AddSkillForm.css"; // we'll add some popup styles

function AddSkillForm({ onClose, onSkillAdded }) {
  const [skill, setSkill] = useState({
    skillName: "",
    resourceType: "",
    platform: "",
    startDate: "", 
    status: "",
    hoursSpent: 0,
    notes: ""
  });

  const handleChange = e => {
    setSkill({ ...skill, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("https://skillstacktracker.onrender.com/SkillStack/addSkill", skill);
      alert(res.data.message);
      onSkillAdded();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Error adding skill");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>Add New Skill</h3>
        <form onSubmit={handleSubmit}>
          <input name="skillName" placeholder="Skill Name" value={skill.skillName} onChange={handleChange} required />
          <input name="resourceType" placeholder="Type" value={skill.resourceType} onChange={handleChange} />
          <input name="platform" placeholder="Platform" value={skill.platform} onChange={handleChange} />
          <input name="startDate" type="date" placeholder="Start Date" value={skill.startDate} onChange={handleChange} />
          <input name="status" placeholder="Status" value={skill.status} onChange={handleChange} />
          <input name="hoursSpent" type="number" placeholder="Hours Spent" value={skill.hoursSpent} onChange={handleChange} />
          <textarea name="notes" placeholder="Notes" value={skill.notes} onChange={handleChange} />
          <div className="form-buttons">
            <button type="submit">Add Skill</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSkillForm;
