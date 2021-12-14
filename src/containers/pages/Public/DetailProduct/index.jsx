import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getAllDataVariantAndProduct } from "../../../../config/Redux/Action";
import { useEffect, useState } from "react";

const DetailProductPage = (props) => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    props
      .getDataVariant(params.IDProduct)
      .then((response) => setData(response));
  }, [params, props]);

  return (
    <>
      <p>halo detail variant</p>
      {console.log(data)}
    </>
  );
};

const actionRedux = (dispatch) => ({
  getDataVariant: (IDProduct) => dispatch(getAllDataVariantAndProduct(IDProduct)),
});

export default connect(null, actionRedux)(DetailProductPage);
