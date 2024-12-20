import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginY: "5rem",
        height: "50vh",
        backgroundColor: "#fff",
      }}
    >
      <DotLottieReact
        src="https://lottie.host/e01a6cca-4b84-4b0c-9541-130824543586/NVFpO2dWp3.lottie"
        loop
        autoplay
      />
    </Box>
  );
}
