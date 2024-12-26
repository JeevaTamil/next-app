import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: Promise<{
    sortOrder: string;
  }>;
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
  return (
    <>
      <h1>Users</h1>
      <Link className="btn my-5" href="/users/new">
        Add User
      </Link>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <UserTable sortOrder={sortOrder} />
      {/* </Suspense> */}
    </>
  );
};

export default UsersPage;
