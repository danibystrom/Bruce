import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import "./globals.css";
import { Providers } from "./providers";
import theme from "./theme";

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
        <CssBaseline />
        <Providers>
          <CartProvider>
            <ThemeProvider theme={theme}>
              <Grid item>
                <Header />
              </Grid>
              <Grid item xs>
                <Box component={"main"}>{children}</Box>
              </Grid>
              <Footer />
            </ThemeProvider>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
