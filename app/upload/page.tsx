"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface Info {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} alt="demo Image" width={500} height={500} />
      )}
      <CldUploadWidget
        uploadPreset="idx8s2rf"
        options={{
          sources: ["local"],
          cropping: true,
          styles: {
            palette: {
              window: "#000000",
              sourceBg: "#000000",
              windowBorder: "#8E9FBF",
              tabIcon: "#FFFFFF",
              inactiveTabIcon: "#8E9FBF",
              menuIcons: "#2AD9FF",
              link: "#08C0FF",
              action: "#336BFF",
              inProgress: "#00BFFF",
              complete: "#33ff00",
              error: "#EA2727",
              textDark: "#000000",
              textLight: "#FFFFFF",
            },
            fonts: {
              default: null,
              "sans-serif": {
                url: null,
                active: true,
              },
            },
          },
        }}
        onAbort={() => {
          console.log("upload aborted");
        }}
        onClose={() => {
          console.log("upload widget closed");
        }}
        onSuccess={(result, { widget }) => {
          console.log(result);
          const info = result.info as Info;
          setPublicId(info.public_id);
          console.log("Uploaded successfully");
        }}
      >
        {({ open }) => {
          return (
            <button
              className="btn btn-primary"
              onClick={() => {
                open();
              }}
            >
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
