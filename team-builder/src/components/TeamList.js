import React from "react";

export default function TeamList(props) {
  return (
    <div className="teamList">
      {props.teamList.map(member => {
        return (
          <div className="member" key={member.email}>
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.role}</p>
            <button onClick={() => props.setMemberToEdit(member)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}
