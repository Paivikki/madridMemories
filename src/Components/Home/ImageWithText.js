import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import us from "./assets/us.jpg";

export default function ImageWithText() {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          marginTop: "4rem",
          marginLeft: "2rem",
          marginRight: "3rem",
          fontSize: "3.75rem",
          fontWeight: 500,
          lineHeight: 1.2,
          textAlign: "left",
        }}
      >
        About Us
      </Typography>
      <Box
        sx={{
          display: "flex", // Flexbox layout
          flexDirection: { xs: "column", md: "row" }, // Stack on smaller screens, side-by-side on larger screens
          alignItems: "center", // Align items in the center vertically
          justifyContent: "space-between", // Add spacing between columns
          gap: 2, // Add space between columns for small screens
          p: 4, // Padding for the container
        }}
      >
        {/* Left Column: Image */}
        <Box
          component="img"
          src={us} // Replace with your image URL
          alt="Example Image"
          sx={{
            width: { xs: "100%", md: "50%" }, // Full width on small screens, half width on larger
            maxHeight: "300px", // Optional: Limit the height
            objectFit: "cover", // Ensures the image scales well
          }}
        />

        {/* Right Column: Text */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" }, // Full width on small screens, half width on larger
            textAlign: { xs: "left", md: "left" }, // Center text on small screens
          }}
        >
          <Typography variant="body1" style={{ marginTop: "1rem" }}>
            Welcome to Madrid Memories! We’re friends currently studying and
            living our best lives in the vibrant city of Madrid. Our blog is all
            about sharing our favorite spots, hidden gems, and go-to tips for
            making the most of this amazing city.
          </Typography>
          <Typography variant="body1" style={{ marginTop: "1rem" }}>
            From cozy cafés and bustling markets to cultural hotspots and
            late-night hangouts, we bring you a mix of local experiences and
            personal recommendations. Plus, we’ve got an interactive
            recommendation list where you can explore our must-visit places or
            suggest your own! Use the menu in the top left corner or the four links above with the headings 'Food Recommendations', 'Things to do', 'Tips and Tricks', and 'Submit Recommendations' to navigate to the desired information. 
          </Typography>
          <Typography variant="body1" style={{ marginTop: "1rem" }}>
            Whether you’re a fellow student, a traveler, or just curious about
            Madrid, join us on this adventure – there’s always something new to
            discover!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
