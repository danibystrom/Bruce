"use client";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function RefillPageHero() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return isTablet ? (
    <Box
      sx={{
        width: "98%",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "98%",
          height: "40vh",
          marginTop: "3rem",
          borderRadius: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url("/refill-hero-mobile.jpeg")',
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#ffffff",
            textAlign: "center",
            width: "100%",
            maxWidth: "90%",
            padding: "0 1rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "5em",
                sm: "6rem",
              },
              lineHeight: 0.9,
              fontWeight: 400,
              fontFamily: "'Instrument Serif', sans-serif !important",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            Our Vision: Sip, Refill, Repeat
          </Typography>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box sx={{ width: "98%", margin: "auto", overflow: "hidden" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              width: "100%",
              height: "40vh",
              backgroundImage: 'url("/refill-hero.jpeg")',
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
                  md: "7rem",
                  lg: "9rem",
                },
                fontWeight: 400,
                lineHeight: 0.8,
                fontFamily: "'Instrument Serif', sans-serif !important",
              }}
            >
              Our Vision: Sip, Refill, Repeat
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
