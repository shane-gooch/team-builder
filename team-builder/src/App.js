import React, { useState } from "react";
import "./App.css";
import uuidv4 from "uuid/v4";

import TeamForm from "./components/TeamForm";
import TeamList from "./components/TeamList";

function App() {
  ///State Functions
  const [teamList, setTeamList] = useState([
    {
      name: "Bob",
      email: "bob@fake.com",
      role: "Back-End Engineer"
    }
  ]);
  const [memberToEdit, setMemberToEdit] = useState("");
  console.log(teamList);
  //CRUD functions
  const addTeamMember = inputData => {
    setTeamList([...teamList, inputData]);
  };

  const editMember = (e, formData) => {
    e.preventDefault();
    const updatedMembers = teamList.map(member => {
      // member = formData;
      if (member.email === memberToEdit.email) {
        member = formData;
      }
      return member;
    });

    setTeamList(updatedMembers);
    setMemberToEdit("");
  };

  return (
    <div className="App">
      <h1>Team Form</h1>
      <TeamForm
        addTeamMember={addTeamMember}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
      <TeamList teamList={teamList} setMemberToEdit={setMemberToEdit} />
    </div>
  );
}

export default App;
