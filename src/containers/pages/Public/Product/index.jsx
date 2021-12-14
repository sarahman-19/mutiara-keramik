import { Box } from "@mui/material";
import AppBarSearch from "../../../../components/molecules/AppBarSearch";
import { connect } from "react-redux";
import { getAllDataProduct } from "../../../../config/Redux/Action";
import { useEffect } from "react";
import CardProduct from "../../../../components/molecules/CardProduct";
import { useState } from "react";

const ProductPage = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.getAllProduct().then((response) => setData(response));
  }, [props]);

  return (
    <Box>
      <AppBarSearch />
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "95%",
            justifyContent: "space-around",
          }}
        >
          {data.map((d) => {
            return (
              <CardProduct
                key={d.gambar.desain}
                title={d.title}
                image={d.gambar.desain}
                likes={d.favorite}
                size={d.ukuran}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

const stateAction = (dispatch) => ({
  getAllProduct: () => dispatch(getAllDataProduct()),
});

export default connect(null, stateAction)(ProductPage);
