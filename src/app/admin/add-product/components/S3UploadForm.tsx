"use client";
import { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
}

const handleFileChange = (e: FileChangeEvent): void => {
    setFile(e.target.files?.[0] || null);
};

interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

interface ApiResponse {
    status: string;
}

const handleSubmit = async (e: HandleSubmitEvent): Promise<void> => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("/api/s3-upload", {
            method: "POST",
            body: formData,
        });

        const data: ApiResponse = await response.json();
        console.log(data.status);
        setUploading(false);
    } catch (error) {
        console.log(error);
        setUploading(false);
    }
};

  return (
    <>
      <h1>Upload Files to S3 Bucket</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" disabled={!file || uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </>
  );
};

export default UploadForm;
