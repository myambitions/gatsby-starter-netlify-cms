import React from "react";
import Member from "./member";
import "./styles.css";
const Team = ({ team }) => {
  return (
    <div className="team">
      <h2>Команда</h2>
      <div className="team-members">
        {team.map(m => (
          <Member {...m} />
        ))}
      </div>
    </div>
  );
};

export default Team;
