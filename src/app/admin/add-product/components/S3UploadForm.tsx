"use client";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

interface UploadFormProps {
  onUploadSuccess: (url: string) => void;
}

export default function S3UploadForm({ onUploadSuccess }: UploadFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFile(e.target.files?.[0] || null);
  };

  const handleUpload = async (): Promise<void> => {
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        onUploadSuccess(result.url); // Detta skickar den uppladdade bildens URL till `AddProductForm`.
      } else {
        console.error("Failed to upload file:", result.error);
      }
    } catch (error) {
      console.error("Error while uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <Typography>Upload an image</Typography>
      <input type="file" onChange={handleFileChange} />
      <Button
        onClick={handleUpload}
        disabled={uploading || !file}
        variant="contained"
        color="primary"
      >
        {uploading ? "Uploading..." : "Upload"}
      </Button>
    </div>
  );
}
