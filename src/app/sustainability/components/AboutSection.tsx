"use client";
import { Box, Grid, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          color: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px",
          backgroundColor: "#fff",
          height: { xs: "auto", md: "60vh" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: "bold",
            textTransform: "uppercase",
            marginTop: "1rem",
            mb: 1,
          }}
        >
          Our Vision: Sip, Refill, Repeat
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          Bruce isn't just about great taste—it's about making life easier and
          more sustainable. We&apos;ve reinvented the way you enjoy drinks: just
          grab a case, then refill with our eco-friendly tablets. No waste, no
          hassle, just a perfectly refreshing sip every time.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          Our commitment? To reduce single-use plastics and make sustainability
          a part of every sip. With Bruce, all you need is one case, and
          you&apos;re good to go—saving the planet, one refill at a time.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          At Bruce, we believe that small actions lead to big changes.
          That&apos;s why we&apos;ve designed a system that allows you to keep
          enjoying your favorite drinks, without the guilt of excess waste. Our
          mission is to make sustainability as simple as cracking open a cold
          one.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          So, join us in our quest for a greener future. Sip, refill, and
          repeat—the planet will thank you.
        </Typography>
      </Grid>
    </Box>
  );
}
