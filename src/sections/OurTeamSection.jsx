import React from "react";
import { teamMembers } from "../utils/teamMemberConstants";
import TeamMemberCard from "../components/TeamMemberCrad";

const OurTeamSection = () => {
  return (
    <section id="ourteam" className="bg-white py-2">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-amber-500 mb-6">
          The Team
        </h3>
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Our Experts
        </h2>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
