import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY || "",
  },
});

export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get("file") as File;

    if (!file || file.size === 0) {
      throw new Error("Ingen fil hittades, eller fel på fil");
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const fileExtension = file.name.split(".").pop();

    const fileName = `${randomUUID()}.${fileExtension}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME, 
      Key: `uploads/${fileName}`,
      Body: buffer, 
      ContentType: file.type, 
    });

    await s3Client.send(command);

    const fileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_BUCKET_REGION}.amazonaws.com/uploads/${fileName}`;

    return { success: true, url: fileUrl };
  } catch (error) {
    console.error("Fel vid uppladdning:", error);
    return { success: false, error: "Kunde inte ladda upp filen" };
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await (file as Blob).arrayBuffer());
    const result = await uploadImage(formData);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Error while uploading file" });
  }
}
