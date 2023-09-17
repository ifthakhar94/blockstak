import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="#">Item 1</Link>
          </li>
          <li>
            <Link href="#">Item 2</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
