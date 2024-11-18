import { Box, Grid } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
        <Grid item>
          <Header />
        </Grid>
        <Grid item xs>
          <Box component={"main"}>{children}</Box>
        </Grid>
        <Footer />
      </body>
    </html>
  );
}
