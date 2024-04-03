import React from "react";
import Link from "next/link";
import SocialLink from "./ui/SocialLink";
import NavLink from "./ui/NavLink";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex p-6 justify-between">
      <div className="flex flex-row space-x-12 paragraph">
        <div>2024</div>
        <span>
          <Link href="/">Jess Jiang</Link>
        </span>
      </div>
      <div className="flex gap-x-12 justify-center items-center">
        <SocialLink
          icon={<BsLinkedin />}
          name="@Jess Jiang"
          link="https://www.linkedin.com/in/jess-jiang-7b373a215/"
        />
        <SocialLink
          icon={<BsGithub />}
          name="@zihuiJ"
          link="https://github.com/zihuiJ"
        />
        <SocialLink
          icon={<MdEmail />}
          name="email me"
          link="mailto: z253jian@uwaterloo.ca"
        />
      </div>
      <div className="flex gap-x-12">
        <NavLink link="/about" name="about" />
        <NavLink link="/projects" name="projects" />
      </div>
    </div>
  );
};

export default Navbar;
