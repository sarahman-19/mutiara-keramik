// material ui
import { Box } from "@mui/material";

// module
import { connect } from "react-redux";
import { useEffect, useState } from "react";

// local module
import {
  getAllDataProduct,
  userHaveLogin,
} from "../../../../config/Redux/Action";
import CardProduct from "../../../../components/molecules/CardProduct";
import AppBarProduct from "../../../../components/molecules/AppBarProduct";

const ProductPage = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.loginValidate();
    props.getAllProduct().then((response) => setData(response));
  }, [props]);

  return (
    <Box>
      <AppBarProduct />
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

const stateAction = (dispatch) => ({
  getAllProduct: () => dispatch(getAllDataProduct()),
  loginValidate: () => dispatch(userHaveLogin()),
});

export default connect(null, stateAction)(ProductPage);
