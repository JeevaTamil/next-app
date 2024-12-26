import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    userId: number;
  };
}

const UserDetailPage = async ({
  params,
}: {
  params: Promise<{ userId: number }>;
}) => {
  const { userId } = await params;

  if (userId > 10) notFound();

  return (
    <div>
      <h1>UserDetailPage {userId}</h1>
    </div>
  );
};

export default UserDetailPage;
