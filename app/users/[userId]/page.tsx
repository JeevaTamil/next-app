import React from "react";

interface Props {
  params: {
    userId: number;
  };
}

const UserDetailPage = ({ params: { userId } }: Props) => {
  return (
    <div>
      <h1>UserDetailPage {userId}</h1>
    </div>
  );
};

export default UserDetailPage;
