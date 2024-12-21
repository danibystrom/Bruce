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
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        // Returnera URL:en till AddProductForm
        onUploadSuccess(data.url);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
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
