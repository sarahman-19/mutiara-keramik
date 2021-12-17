import { Box } from "@mui/material";
import AppBarProduct from "../../../../../components/molecules/AppBarProduct";
import { connect } from "react-redux";
import { getProductsByTekstur, userHaveLogin } from "../../../../../config/Redux/Action";
import { useEffect } from "react";
import CardProduct from "../../../../../components/molecules/CardProduct";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {useNavigate} from 'react-router';

const ProductByTekstur = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const params = useParams();

  useEffect(() => {
    if(props.statusLogin === false){
      navigate('/produk')
    }
    props.loginValidate()
    props
      .getDataByTekstur(params.IDTekstur)
      .then((response) => setData(response));
  }, [navigate, params, props]);

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
  getDataByTekstur: (tekstur) => dispatch(getProductsByTekstur(tekstur)),
  loginValidate: () => dispatch(userHaveLogin())
});

export default connect(stateRedux, stateAction)(ProductByTekstur);
