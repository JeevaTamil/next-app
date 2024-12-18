import Link from "next/link";
import React from "react";

interface NavItem {
  label: string;
  link: string;
}

const NavBar = () => {
  const navItems: NavItem[] = [
    { label: "Users", link: "/users" },
    { label: "Products", link: "/products" },
    { label: "Admins", link: "/admins" },
  ];
  return (
    <div className="flex bg-slate-300">
      <div className="p-4 mr-10">
        <Link href="/">Home</Link>
      </div>

      {navItems.map((item) => (
        <div className="p-4">
          <Link href={item.link}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
