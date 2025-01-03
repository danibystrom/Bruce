"use client";
import { Box, Grid, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // margin: "1rem",
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
          Born on the way to a party, carrying way too much stuff
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          It all started with a simple question: Why should drinks be
          complicated? At Bruce, we believe in simplicity, convenience, and,
          most importantly, flavor. Born out of a desire to shake things up,
          Bruce is here to redefine what it means to grab a drink on the go. Our
          mission? To create the perfect beverage for those who don&apos;t want
          to sacrifice taste for convenience—whether you&apos;re hiking a
          mountain or rushing to your next meeting.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          Bruce isn&apos;t just a drink; it&apos;s a revolution. Forget bottles,
          forget cans, and definitely forget complicated mixes. We&apos;re
          bringing you vibrant, flavorful drinks in the form of effervescent
          tablets—because life&apos;s too short for anything less.
        </Typography>{" "}
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          Our vision is big. Bruce isn&apos;t just a brand; it&apos;s a
          movement. We&apos;re here to change the way you think about drinks,
          one tablet at a time. From the busy city streets to the mountain tops,
          we want Bruce to be your go-to, your secret weapon, your refreshment
          for any occasion.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          So, join us. Let&apos;s take over the world, one sip at a time. Bruce
          is just getting started, and we&apos;re only getting bigger.
        </Typography>
      </Grid>
    </Box>
  );
}
