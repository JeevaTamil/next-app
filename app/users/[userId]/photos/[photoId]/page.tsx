import React from "react";

interface Props {
  params: Promise<{
    userId: number;
    photoId: number;
  }>;
}

const UserDetailPhotoPage = async ({ params }: Props) => {
  const { userId, photoId } = await params;
  return (
    <div>
      <h2>UserId {userId}</h2>
      <h2>PhotoId {photoId}</h2>
    </div>
  );
};

export default UserDetailPhotoPage;
