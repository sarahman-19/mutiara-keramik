import { Box } from "@mui/material";
import AppBarSearch from "../../../../../components/molecules/AppBarSearch";
import { connect } from "react-redux";
import { getProductsByTekstur } from "../../../../../config/Redux/Action";
import { useEffect } from "react";
import CardProduct from "../../../../../components/molecules/CardProduct";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductByTekstur = (props) => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    props
      .getDataByTekstur(params.IDTekstur)
      .then((response) => setData(response));
  }, [params, props]);

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
  getDataByTekstur: (tekstur) => dispatch(getProductsByTekstur(tekstur)),
});

export default connect(null, stateAction)(ProductByTekstur);
