import React from "react";

const Team = ({ team, head }) => {
  return (
    <div className="relative w-fit">
      {/* Image */}
      <img src={team} alt="team" className="w-full" />

      {/* Text overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full shadow-4xl shadow-black text-white px-4 py-2">
        <h3 className="font-bold text-2xl">{head}</h3>
      </div>
    </div>
  );
};

export default Team;
