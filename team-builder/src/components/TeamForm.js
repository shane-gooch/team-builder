import React, { useState } from "react";

export default function TeamForm() {
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  console.log(formData);

  const changeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="teamForm">
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={changeHandler}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter name"
            onChange={changeHandler}
          />
        </label>
        <label>
          Role:
          <select name="role" value={formData.role} onChange={changeHandler}>
            <option>Team Lead</option>
            <option>Back-End Engineer</option>
            <option>Front-End Engineer</option>
            <option>Data Scientist</option>
            <option>UX Designer</option>
            <option>UI Developer</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
