// material ui
import { Box } from "@mui/material";

// module
import AppBarProduct from "../../../../../components/molecules/AppBarProduct";
import { connect } from "react-redux";
import { getProductsByTekstur, userHaveLogin } from "../../../../../config/Redux/Action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


// local module
import CardProduct from "../../../../../components/molecules/CardProduct";

const ProductByTekstur = (props) => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    props.loginValidate()
    props
      .getDataByTekstur(params.IDTekstur)
      .then((response) => setData(response));
  }, [params, props]);

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
  getDataByTekstur: (tekstur) => dispatch(getProductsByTekstur(tekstur)),
  loginValidate: () => dispatch(userHaveLogin())
});

export default connect(null, stateAction)(ProductByTekstur);
