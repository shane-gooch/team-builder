import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";

export default function TeamForm(props) {
  //Form STate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  //Handlers
  const changeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //CRUD
  const addTeamMember = e => {
    e.preventDefault();
    {
      props.addTeamMember(formData);
    }
    setFormData({ name: "", email: "", role: "" });
  };

  useEffect(() => {
    setFormData(props.memberToEdit);
  }, [props.memberToEdit]);

  return (
    <div>
      <form
        className="teamForm"
        onSubmit={
          props.memberToEdit
            ? e => props.editMember(e, formData)
            : addTeamMember
        }
      >
        <label>
          Name:
          <Input
            focus
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={changeHandler}
            required
          />
        </label>
        <label>
          Email:
          <Input
            focus
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={changeHandler}
            required
          />
        </label>
        <label>
          Role:
          <select
            name="role"
            value={formData.role}
            onChange={changeHandler}
            required
          >
            <option>List of Roles</option>
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
