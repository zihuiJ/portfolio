import React from "react";

async function SocialLink({ name, icon, link }) {
  return (
    <div className="flex flex-row gap-x-1 paragraph items-center">
      <div>{icon}</div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {name}
      </a>
    </div>
  );
}

export default SocialLink;
