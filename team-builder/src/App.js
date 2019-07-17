import React, { useState } from "react";

import TeamForm from "./components/TeamForm";
import TeamList from "./components/TeamList";

export default function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState("");

  const addTeamMember = formData => {
    setTeamList([...teamList, formData]);
  };
  const editMember = (e, formData) => {
    e.preventDefault();
    const updatedMembers = teamList.map(member => {
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
