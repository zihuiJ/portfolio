import React from "react";
import Link from "next/link";
import clsx from "clsx"

const NavLink = ({ link, name, className }) => {
  return (
    <Link href={link} className={clsx("paragraph hover:underline", className)}>
      {name}
    </Link>
  );
};

export default NavLink;
