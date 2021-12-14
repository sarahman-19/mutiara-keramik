import { Box } from "@mui/material";
import AppBarSearch from "../../../../components/molecules/AppBarSearchPrivate";
import CardProduct from "../../../../components/molecules/CardProduct";

const ProductPagePrivate = () => {
  return (
    <Box>
      <AppBarSearch />
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
        <Box sx={{display: "flex", flexWrap: "wrap", width: '95%', justifyContent: 'space-around'}}>
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/desain/sorento-desain_BwKIMXUD3.png?updatedAt=1639271763512"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/desain/sanders-desain_yiCIftp45.png?updatedAt=1639271771515"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/giorgiogrey-desain_LbFIgfKj4__1__A3umCuRC3.jpg?updatedAt=1639371971622"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/desain/gustocolores-desain_Hsmi1YGWw.jpg?updatedAt=1639271724035"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/quadra-desain_Cvs4E22kx__1__PKUDdjRLO.jpg?updatedAt=1639371670730"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/desain/ciello-desain_pFHcjp5Jg.png?updatedAt=1639271703633"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/desain/sorento-desain_BwKIMXUD3.png?updatedAt=1639271763512"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/desain/sanders-desain_yiCIftp45.png?updatedAt=1639271771515"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/desain/sorento-desain_BwKIMXUD3.png?updatedAt=1639271763512"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/desain/sanders-desain_yiCIftp45.png?updatedAt=1639271771515"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/giorgiogrey-desain_LbFIgfKj4__1__A3umCuRC3.jpg?updatedAt=1639371971622"
        />
        <CardProduct
          title="sorento black"
          image="https://ik.imagekit.io/sarahman19/desain/gustocolores-desain_Hsmi1YGWw.jpg?updatedAt=1639271724035"
        />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPagePrivate;
