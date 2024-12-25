"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface NavItem {
  label: string;
  link: string;
}

const NavBar = () => {
  const { status, data: session } = useSession();

  const navItems: NavItem[] = [
    { label: "Users", link: "/users" },
    { label: "Products", link: "/products" },
    { label: "Admins", link: "/admins" },
    { label: "Upload", link: "/upload" },
  ];

  if (status === "authenticated") {
    navItems.push({ label: session.user!.name!, link: "/" });
    navItems.push({ label: "Signout", link: "/api/auth/signout" });
  } else if (status === "unauthenticated") {
    navItems.push({ label: "Signin", link: "/api/auth/signin" });
  }
  return (
    <div className="flex bg-neutral text-neutral-content">
      <div className="p-4 mr-10">
        <Link href="/">Home</Link>
      </div>

      {navItems.map((item) => (
        <div className="p-4">
          <Link href={item.link}>{item.label}</Link>
        </div>
      ))}

      {status === "loading" && (
        <span className="loading loading-spinner loading-sm items-center"></span>
      )}
    </div>
  );
};

export default NavBar;
