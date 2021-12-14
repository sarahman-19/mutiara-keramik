import AppBarSearchPrivate from "../../atoms/AppBarSearchPrivate";
import AppBarSearch from "../../atoms/AppBarSearch";

const AppBarProduct = (props) => {
  if (props.loginStatus) {
    return <AppBarSearchPrivate />;
  }

  return <AppBarSearch />;
};

export default AppBarProduct;
