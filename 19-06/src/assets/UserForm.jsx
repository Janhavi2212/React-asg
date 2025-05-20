import React, { useState } from "react";

const skillSets = ["JavaScript", "React", "Node.js", "CSS"];

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: [],
  });

  const [errors, setErrors] = useState({});

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      let updatedSkills = [...prev.skills];
      if (checked) {
        if (!updatedSkills.includes(value)) {
          updatedSkills.push(value);
        }
      } else {
        updatedSkills = updatedSkills.filter((skill) => skill !== value);
      }
      return {
        ...prev,
        skills: updatedSkills,
      };
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name cannot be empty";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be empty";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must include '@'";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Please select at least one skill";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSubmittedData((prev) => [...prev, formData]);

      setFormData({
        name: "",
        email: "",
        skills: [],
      });
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Skills:</label>
          <div>
            {skillSets.map((skill) => (
              <label key={skill} style={{ marginRight: 10 }}>
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleCheckboxChange}
                />
                {skill}
              </label>
            ))}
          </div>
          {errors.skills && <p style={{ color: "red" }}>{errors.skills}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Users</h2>
      {submittedData.length === 0 ? (
        <p>No users submitted yet.</p>
      ) : (
        <ul>
          {submittedData.map((user, index) => (
            <li key={index}>
              <strong>Name:</strong> {user.name} | <strong>Email:</strong>{" "}
              {user.email} | <strong>Skills:</strong> {user.skills.join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserForm;
