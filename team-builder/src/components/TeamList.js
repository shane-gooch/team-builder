import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Button, Icon } from "semantic-ui-react";

export default function TeamList(props) {
  return (
    <div className="teamList">
      {props.teamList.map(member => {
        return (
          <div key={member.email}>
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.role}</p>
            <Button icon onClick={() => props.setMemberToEdit(member)}>
              <Icon name="pencil alternate" />
            </Button>
          </div>
        );
      })}
    </div>
  );
}
