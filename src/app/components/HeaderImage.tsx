"use client";
import { Box, Grid, Typography } from "@mui/material";

export default function HeaderImage() {
  return (
    <Box sx={{ width: "98%", margin: "auto", overflow: "hidden" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: 'url("/hero-img.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 0,
              minHeight: "450px",
            }}
          />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "4rem",
                  md: "8rem",
                  lg: "13rem",
                },
                fontWeight: 700,
                lineHeight: 0.71,
              }}
            >
              bruce
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mb: 1, textAlign: "left" }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: "bold",
            textTransform: "uppercase",
            marginTop: "1rem",
            mb: 1,
          }}
        >
          Delicious Cocktails, No Bar Required
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem" },
            maxWidth: "700px",
            marginBottom: "2rem",
          }}
        >
          He’s all you need to craft the world’s best drinks. One tablet, some
          water, and you’re good to go. Bruce thinks smart, packs light, and
          always makes sure the party’s with you – wherever you are.
        </Typography>
      </Box>
    </Box>
  );
}
