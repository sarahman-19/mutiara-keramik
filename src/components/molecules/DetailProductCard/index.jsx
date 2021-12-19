import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Card, Divider, Box, List, ListItem } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { handleStatusLikedCheck } from "../../../config/Redux/Action";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function DetailProductCard(props) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (props.uid !== null) {
      props.handleStatusLikedCheck(props.uid, props.productID);
    }
  }, [props]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: { xs: "90%", md: "80%" }, m: { xs: 1, md: 2 } }}>
      <CardMedia
        component="img"
        height={{ xs: "250px", md: "250px" }}
        image={props.imageDesain}
        alt={props.title}
      />
      <CardContent>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
            }}
          >
            <CardMedia
              component="img"
              height={{ xs: "250px", md: "250px" }}
              sx={{ width: { xs: "150px", md: "250px" }, boxShadow: 4 }}
              image={props.imageVariant}
              alt={props.title}
            />
          </Box>
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {props.namaVariant}
            </Typography>
            <Divider />
            <List>
              <ListItem>
                <Typography paragraph>Ukuran: {props.ukuran}</Typography>
              </ListItem>
              <ListItem>
                <Typography paragraph>Brand: {props.brand}</Typography>
              </ListItem>
              <ListItem>
                <Typography paragraph>Tekstur: {props.tekstur}</Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{ fontSize: "1.3em" }}
                  color="primary"
                  paragraph
                >
                  Harga:{" "}
                  <NumberFormat
                    value={props.harga}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp"}
                    isNumericString={true}
                  />
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          onClick={(e) => props.like(e.target.checked)}
          checkedIcon={<Favorite />}
          checked={props.statusLike}
        />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const actionRedux = (dispatch) => ({
  handleStatusLikedCheck: (uid, product) =>
    dispatch(handleStatusLikedCheck(uid, product)),
});

const reduxState = (state) => ({
  statusLike: state.isLiked,
});

export default connect(reduxState, actionRedux)(DetailProductCard);
