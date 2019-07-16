import React, { useState, useEffect } from "react";

import "semantic-ui-css/semantic.min.css";
import { Input, Button } from "semantic-ui-react";

export default function TeamForm(props) {
  const [initialState, setInitialState] = useState({
    name: "",
    email: "",
    role: ""
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const addTeamMember = e => {
    e.preventDefault();
    props.addTeamMember(formData);
    setFormData(initialState);
  };

  const changeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFormData(props.memberToEdit);
  }, [props.memberToEdit]);

  return (
    <div className="teamForm">
      <form
        onSubmit={
          props.memberToEdit
            ? e => props.editMember(e, formData)
            : addTeamMember
        }
      >
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={changeHandler}
        />
        <Input
          type="text"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={changeHandler}
        />
        <Input
          type="text"
          name="role"
          placeholder="Enter role"
          value={formData.role}
          onChange={changeHandler}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
