import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getAllDataVariantAndProduct,
  likeHandle,
} from "../../../../config/Redux/Action";
import { useEffect, useState } from "react";
import AppBar from "../../../../components/molecules/AppBar";
import { Box, Skeleton } from "@mui/material";
import DetailProductCard from "../../../../components/molecules/DetailProductCard";

const DetailProductPage = (props) => {
  const [data, setData] = useState("");
  const params = useParams();

  useEffect(() => {
    props
      .getDataVariant(params.IDProduct)
      .then((response) => setData(response));
  }, [params, props]);

  const likeHandle = (likeStatus) => {
    props.likeHandle(likeStatus, data.Product.IDProduct, data.Product.favorite, data.Product);
  };

  const showDetailCard = () => {
    if (data !== "") {
      return (
        <DetailProductCard
          tekstur={data.Product.tekstur}
          like={likeHandle}
          brand={data.Product.brand}
          harga={data.Product.harga}
          ukuran={data.Product.ukuran}
          namaVariant={data.variant.nama}
          imageVariant={data.variant.gambar}
          imageDesain={data.Product.desain}
        />
      );
    } else {
      return (
        <>
          <Skeleton variant="rectangular" width={"80%"} height={400} />
        </>
      );
    }
  };

  return (
    <Box>
      <AppBar loginStatus={props.loginStatus} link="/masuk" title="masuk" />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {showDetailCard()}
      </Box>
    </Box>
  );
};

const actionRedux = (dispatch) => ({
  getDataVariant: (IDProduct) =>
    dispatch(getAllDataVariantAndProduct(IDProduct)),
  likeHandle: (likeStatus, IDProduct, favorite, data) =>
    dispatch(likeHandle(likeStatus, IDProduct, favorite, data)),
});

const reduxState = (state) => ({
  loginStatus: state.isLogin,
});

export default connect(reduxState, actionRedux)(DetailProductPage);
