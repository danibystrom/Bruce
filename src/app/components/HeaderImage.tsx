"use client";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function HeaderImage() {
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
            backgroundImage: 'url("/hero-img.jpeg")',
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
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "12em",
                sm: "13rem",
              },
              fontWeight: 400,
              fontFamily: "'Instrument Serif', sans-serif !important",
            }}
          >
            bruce
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 1, textAlign: "left", px: 1 }}>
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
          Delicious Cocktails, No Bar Required
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem" },
            maxWidth: "700px",
            marginBottom: "2rem",
          }}
        >
          He&apos;s all you need to craft the world&apos;s best drinks. One
          tablet, some water, and you&apos;re good to go. Bruce thinks smart,
          packs light, and always makes sure the party&apos;s with you –
          wherever you are.
        </Typography>
      </Box>
    </Box>
  ) : (
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
                  sm: "8rem",
                  md: "12rem",
                  lg: "18rem",
                },
                fontWeight: 400,
                lineHeight: 0.71,
                fontFamily: "'Instrument Serif', sans-serif !important",
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
          He&apos;s all you need to craft the world&apos;s best drinks. One
          tablet, some water, and you&apos;re good to go. Bruce thinks smart,
          packs light, and always makes sure the party&apos;s with you –
          wherever you are.
        </Typography>
      </Box>
    </Box>
  );
}
