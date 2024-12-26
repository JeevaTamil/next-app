"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface NavItem {
  id: string;
  label: string;
  link: string;
}

const NavBar = () => {
  const { status, data: session } = useSession();

  const navItems: NavItem[] = [
    { id: "users", label: "Users", link: "/users" },
    {
      label: "Products",
      link: "/products",
      id: "products",
    },
    {
      label: "Admins",
      link: "/admins",
      id: "admins",
    },
    {
      label: "Upload",
      link: "/upload",
      id: "upload",
    },
  ];

  if (status === "authenticated") {
    navItems.push({
      label: session.user!.name!,
      link: "/",
      id: "",
    });
    navItems.push({
      label: "Signout",
      link: "/api/auth/signout",
      id: "",
    });
  } else if (status === "unauthenticated") {
    navItems.push({
      label: "Signin",
      link: "/api/auth/signin",
      id: "",
    });
  }
  return (
    <div className="flex bg-neutral text-neutral-content">
      <div className="p-4 mr-10">
        <Link href="/">Home</Link>
      </div>

      {navItems.map((item) => (
        <div className="p-4" key={item.id}>
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
