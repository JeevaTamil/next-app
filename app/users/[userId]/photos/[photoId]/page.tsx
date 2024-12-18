import React from "react";

interface Props {
  params: {
    userId: number;
    photoId: number;
  };
}

const UserDetailPhotoPage = ({ params: { userId, photoId } }: Props) => {
  return (
    <div>
      <h2>UserId {userId}</h2>
      <h2>PhotoId {photoId}</h2>
    </div>
  );
};

export default UserDetailPhotoPage;
