import * as React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  CardMedia,
  Card,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import Favorite from "@mui/icons-material/Favorite";

function CardProduct(props) {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "300px", m: 1 }}>
      <Card>
        <CardActionArea onClick={() => navigate('/produk/' + props.id)}>
          <CardMedia
            sx={{ width: 300 }}
            component="img"
            height="200"
            image={props.image}
            alt={props.id}
          />
        </CardActionArea>
        <CardActions sx={{ display: "flex" }}>
          <Button size="small">
            <Favorite />
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

export default CardProduct;