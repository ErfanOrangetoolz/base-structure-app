import { Grid, Typography } from "@mui/material";
import EachUpcomingProduct from "./EachUpcomingProduct";
import Styles from "./css/upcoming-product.module.css";

const product = {
  id: 1,
  title: "GIGABYTE GeForce RTX 4070 Ti 12GB GDDR6X EAGLE OC Graphics Card",
  image:
    "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
};

const UpcomingProducts: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <Typography variant="h5" className={Styles.headerTxt}>
          Upcoming Products
        </Typography>
      </div>
      <div className={Styles.productsWrp}>
        <Grid container spacing={2}>
          <EachUpcomingProduct {...product} />
          <EachUpcomingProduct {...product} />
          <EachUpcomingProduct {...product} />
          <EachUpcomingProduct {...product} />
          {/* <EachUpcomingProduct {...product} /> */}
        </Grid>
      </div>
    </div>
  );
};
export default UpcomingProducts;
