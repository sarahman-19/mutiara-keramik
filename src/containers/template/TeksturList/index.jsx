// module
import { Box, Typography } from "@mui/material";

// local module
import CardImageWithTitle from "../../../containers/organisms/CardImageWithTitle";

const TeksturList = () => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        boxShadow: 4,
        width: {xs: '100%', md: '95%', lg: '90%'},
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4">Permukaan</Typography>
          <hr />
        </Box>
      </Box>
      <Box>
        <CardImageWithTitle />
      </Box>
    </Box>
  );
};

export default TeksturList;
