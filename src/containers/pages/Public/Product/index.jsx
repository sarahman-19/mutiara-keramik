import { Box } from "@mui/material";
import { connect } from "react-redux";
import { getAllDataProduct, userHaveLogin } from "../../../../config/Redux/Action";
import { useEffect, useState } from "react";
import CardProduct from "../../../../components/molecules/CardProduct";
import AppBarProduct from "../../../../components/molecules/AppBarProduct";
import {useNavigate} from 'react-router';

const ProductPage = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    if(props.statusLogin === false){
      navigate('/produk')
    }
    props.loginValidate()
    props.getAllProduct().then((response) => setData(response));
  }, [navigate, props]);

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
  loginValidate: () => dispatch(userHaveLogin())
});

export default connect(stateRedux, stateAction)(ProductPage);
