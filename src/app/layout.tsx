import { Box } from "@mui/material";
import "./globals.css";

export const metadata = {
  title: "Bruce",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Box component={"main"}>{children}</Box>
      </body>
    </html>
  );
}
