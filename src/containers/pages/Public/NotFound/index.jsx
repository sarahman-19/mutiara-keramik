import { Box, CardMedia, Button } from "@mui/material";
import image404 from '../../../../assets/svg/404.svg'

const NotFound = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          src={image404}
          alt="404 image"
        />
        <Button variant="outlined">GO HOME</Button>
      </Box>
    </Box>
  );
};

export default NotFound;
