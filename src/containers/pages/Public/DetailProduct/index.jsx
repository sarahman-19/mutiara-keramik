// module
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

// local module
import {
  getAllDataVariantAndProduct,
  likeHandle,
  userHaveLogin,
  getDataUser,
  handleStatusLikedCheck,
} from "../../../../config/Redux/Action";
import AppBar from "../../../../components/molecules/AppBar";
import { getDataStorage } from "../../../../utils/LocalStorage";
import DetailProductCard from "../../../../components/molecules/DetailProductCard";

// material ui
import { Box, Skeleton, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DetailProductPage = (props) => {
  const [dataVariant, setDataVariant] = useState("");
  const [dataUser, setDataUser] = useState("");
  const params = useParams();
  const uid = getDataStorage("UID");

  useEffect(() => {
    if (uid !== null) {
      props.getDataUser(uid).then((data) => setDataUser(data));
    }

    props
      .getDataVariant(params.IDProduct)
      .then((response) => setDataVariant(response));

    props.loginValidate();
  }, [params.IDProduct, props, uid]);

  const handleLikeProduct = (likeStatus) => {
    if (uid !== null) {
      props.likeHandle(
        likeStatus,
        dataVariant.Product.id,
        dataVariant.Product.favorite,
        dataVariant.Product,
        dataUser,
        uid,
        dataVariant.Product.IDProduct
      );
    }else{
      alert('login dulu')
    }
  };

  const showDetailCard = () => {
    if (dataVariant !== "") {
      return (
        <DetailProductCard
          tekstur={dataVariant.Product.tekstur}
          like={handleLikeProduct}
          brand={dataVariant.Product.brand}
          harga={dataVariant.Product.harga}
          ukuran={dataVariant.Product.ukuran}
          namaVariant={dataVariant.variant.nama}
          imageVariant={dataVariant.variant.gambar}
          imageDesain={dataVariant.Product.desain}
          uid={uid}
          productID={params.IDProduct}
        />
      );
    } else {
      return (
        <>
          <Skeleton
            variant="rectangular"
            sx={{ mb: 2 }}
            width={"80%"}
            height={400}
          />
        </>
      );
    }
  };

  return (
    <Box>
      <AppBar link="/masuk" title="masuk" />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {showDetailCard()}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button sx={{ width: { xs: "90%", md: "80%" } }} variant="contained">
          <ShoppingCartIcon /> Tambah Ke Keranjang
        </Button>
      </Box>
    </Box>
  );
};

const actionRedux = (dispatch) => ({
  getDataVariant: (IDProduct) =>
    dispatch(getAllDataVariantAndProduct(IDProduct)),
  likeHandle: (
    likeStatus,
    IDProduct,
    favorite,
    data,
    dataUser,
    uid,
    Productid
  ) =>
    dispatch(
      likeHandle(
        likeStatus,
        IDProduct,
        favorite,
        data,
        dataUser,
        uid,
        Productid
      )
    ),
  loginValidate: () => dispatch(userHaveLogin()),
  getDataUser: (uid) => dispatch(getDataUser(uid)),
  handleStatusLikedCheck: (uid, product) =>
    dispatch(handleStatusLikedCheck(uid, product)),
});

export default connect(null, actionRedux)(DetailProductPage);
