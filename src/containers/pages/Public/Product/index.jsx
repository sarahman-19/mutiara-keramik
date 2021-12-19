// material ui
import { Box } from "@mui/material";

// module
import { connect } from "react-redux";
import { useEffect, useState } from "react";

// local module
import {
  getAllDataProduct,
  userHaveLogin,
  getDataUser,
} from "../../../../config/Redux/Action";
import CardProduct from "../../../../components/molecules/CardProduct";
import AppBarProduct from "../../../../components/molecules/AppBarProduct";
import { getDataStorage } from "../../../../utils/LocalStorage";

const ProductPage = (props) => {
  const [data, setData] = useState([]);
  const uid = getDataStorage("UID");

  useEffect(() => {
    props.loginValidate();
    props.getAllProduct().then((response) => setData(response));
  }, [props, uid]);

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
  getDataUser: (uid) => dispatch(getDataUser(uid)),
});

export default connect(null, stateAction)(ProductPage);
