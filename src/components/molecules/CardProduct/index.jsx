import * as React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  CardMedia,
  Card,
  Typography
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

export default function CardProduct(props) {
  return (
    <Box sx={{ width: "300px", m: 1 }}>
      <Card>
        <CardActionArea>
          <CardMedia
            sx={{ width: 300 }}
            component="img"
            height="200"
            image={props.image}
            alt="props.title"
          />
        </CardActionArea>
        <CardActions sx={{ display: "flex" }}>
          <Button size="small">
            <FavoriteBorderIcon />
            <Typography variant="caption">{props.likes}</Typography>
          </Button>
          <Button size="small">
            <ShareIcon />
          </Button>
          <Button
            sx={{ flex: 1 }}
            size="small"
            variant="outlined"
            color="primary"
          >
            {props.size}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
