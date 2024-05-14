import React from "react";

async function SocialLink({ name, icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline flex flex-row gap-x-1 paragraph items-center"
    >
      <div>{icon}</div>
      <div className="hidden lg:block shrink-0">{name}</div>
    </a>
  );
}

export default SocialLink;
