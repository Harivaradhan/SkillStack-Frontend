import React, { useEffect, useState } from "react";
import axios from "axios";
import AddSkillForm from "./AddSkillForm";
import "./SkillList.css";

function SkillList() {
  const [skills, setSkills] = useState([]);
  const [editingSkill, setEditingSkill] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchSkills = async () => {
    try {
     const res = await axios.get("https://skillstacktracker.onrender.com/SkillStack/getAllSkills");

      setSkills(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // 🔴 DELETE handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      try {
        await axios.delete(`https://skillstacktracker.onrender.com/SkillStack/deleteServlet?id=${id}`);
        alert("Skill deleted successfully!");
        fetchSkills();
      } catch (err) {
        console.error(err);
        alert("Failed to delete skill.");
      }
    }
  };

  // ✏️ EDIT handler
  const handleEdit = (skill) => {
    setEditingSkill(skill);
  };

  // 💾 SAVE updated skill
  const handleUpdate = async () => {
    try {
      await axios.put("https://skillstacktracker.onrender.com/SkillStack/UpdateServlet", editingSkill);
      alert("Skill updated successfully!");
      setEditingSkill(null);
      fetchSkills();
    } catch (err) {
      console.error(err);
      alert("Failed to update skill.");
    }
  };

  // 🧠 Handle input change while editing
  const handleChange = (e) => {
    setEditingSkill({ ...editingSkill, [e.target.name]: e.target.value });
  };


  return (
    <div>
      <h2>All Skills</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Platform</th>
            <th>startDate</th>
            <th>Status</th>
            <th>Hours</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
           {skills.map((skill) => (
            <tr key={skill.id}>
              <td>{skill.id}</td>

              {editingSkill && editingSkill.id === skill.id ? (
                <>
                  <td>
                    <input
                      name="skillName"
                      value={editingSkill.skillName}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      name="resourceType"
                      value={editingSkill.resourceType}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      name="platform"
                      value={editingSkill.platform}
                      onChange={handleChange}
                    />
                  </td>
                   <td>
                    <input
                      type="date"
                      name="startDate"
                       value={editingSkill.startDate}
                    onChange={handleChange}
                     />
                  </td>
                  <td>
                    <input
                      name="status"
                      value={editingSkill.status}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      name="hoursSpent"
                      type="number"
                      value={editingSkill.hoursSpent}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      name="notes"
                      value={editingSkill.notes}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditingSkill(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{skill.skillName}</td>
                  <td>{skill.resourceType}</td>
                  <td>{skill.platform}</td>
                  <td>{skill.startDate}</td>
                  <td>{skill.status}</td>
                  <td>{skill.hoursSpent}</td>
                  <td>{skill.notes}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(skill)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(skill.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setShowForm(true)}>➕ Add Skill</button>

      {showForm && (
        <AddSkillForm onClose={() => setShowForm(false)} onSkillAdded={fetchSkills} />
      )}
    </div>
  );
}

export default SkillList;
