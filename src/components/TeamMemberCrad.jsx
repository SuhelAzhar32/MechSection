import React from "react";

const TeamMemberCard = ({ member, index }) => {
  return (
    <div key={index} className="p-2 text-center">
      <div className="flex justify-center w-full">
        <img
          src={member.image}
          alt={`${member.title} img`}
          className="w-3/4 md:w-full lg:w-full h-60 object-cover "
        />
      </div>
      <h3 className="text-lg md:text-2xl font-bold text-black py-2">
        {member.title}
      </h3>

      <p className="text-gray-600 line-clamp-3">{member.description}</p>
    </div>
  );
};

export default TeamMemberCard;
