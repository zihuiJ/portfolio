import React from "react";
import Link from "next/link";
import clsx from "clsx";

const heroButton = ({ buttonVariant, link, children }) => {
  return (
    <Link href={link}>
      <div
        className={clsx(
          buttonVariant === "primary" && "btn-primary",
          buttonVariant === "outline" && "btn-outline",
          "px-4 py-2 paragraph"
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export default heroButton;
