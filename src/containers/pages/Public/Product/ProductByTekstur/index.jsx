import { Box } from "@mui/material";
import AppBarProduct from "../../../../../components/molecules/AppBarProduct";
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
      <AppBarProduct loginStatus={props.statusLogin} />
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
                key={d.gambar}
                id={d.id}
                image={d.gambar}
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

const stateRedux = (state) => ({
  statusLogin: state.isLogin,
});

const stateAction = (dispatch) => ({
  getDataByTekstur: (tekstur) => dispatch(getProductsByTekstur(tekstur)),
});

export default connect(stateRedux, stateAction)(ProductByTekstur);
