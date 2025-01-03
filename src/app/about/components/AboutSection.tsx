"use client";
import { Box, Grid, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "1rem",
      }}
    >
      <Grid container sx={{ height: { xs: "auto", md: "60vh" } }}>
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
            height: "100%",
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
            BORN IN THE HEART OF ITALY
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            It all started with a simple question: Why should drinks be
            complicated? At Bruce, we believe in simplicity, convenience, and,
            most importantly, flavor. Born out of a desire to shake things up,
            Bruce is here to redefine what it means to grab a drink on the go.
            Our mission? To create the perfect beverage for those who don't want
            to sacrifice taste for convenience—whether you're hiking a mountain
            or rushing to your next meeting.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Bruce isn't just a drink; it's a revolution. Forget bottles, forget
            cans, and definitely forget complicated mixes. We’re bringing you
            vibrant, flavorful drinks in the form of effervescent
            tablets—because life’s too short for anything less.
          </Typography>{" "}
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Our vision is big. Bruce isn't just a brand; it's a movement. We're
            here to change the way you think about drinks, one tablet at a time.
            From the busy city streets to the mountain tops, we want Bruce to be
            your go-to, your secret weapon, your refreshment for any occasion.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            So, join us. Let’s take over the world, one sip at a time. Bruce is
            just getting started, and we’re only getting bigger.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
