import { Box } from "@mui/material";
import { connect } from "react-redux";
import { getAllDataProduct } from "../../../../config/Redux/Action";
import { useEffect, useState } from "react";
import CardProduct from "../../../../components/molecules/CardProduct";
import AppBarProduct from "../../../../components/molecules/AppBarProduct";

const ProductPage = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.getAllProduct().then((response) => setData(response));
  }, [props]);

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
                key={d.desain}
                id={d.id}
                image={d.desain}
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
  getAllProduct: () => dispatch(getAllDataProduct()),
});

export default connect(stateRedux, stateAction)(ProductPage);
