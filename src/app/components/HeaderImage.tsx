"use client";
import { Card, CardMedia, Grid } from "@mui/material";

export default function HeaderImage() {
  return (
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: "98%",
          maxWidth: "100vw",
          height: "auto",
          marginBottom: { xs: 2, md: 4 },
          borderRadius: 0,
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          image="/hero-img.jpeg"
          alt="hero image"
          sx={{
            width: "100%",
            height: "90vh",
            objectFit: "cover",
          }}
        />
      </Card>
    </Grid>
  );
}
