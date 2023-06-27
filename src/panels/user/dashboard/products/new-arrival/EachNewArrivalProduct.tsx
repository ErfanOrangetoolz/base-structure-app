import { Grid, Typography } from "@mui/material";
import Styles from "./css/new-arrival-product.module.css";

interface UpcomingProduct {
  id: number;
  title: string;
  description?: string | null;
  image: string;
  prviousPrice: number | string;
  currentPrice: number | string;
  discount: number | string;
}

const EachNewArrivalProduct = ({
  id,
  title,
  image,
  prviousPrice,
  currentPrice
}: UpcomingProduct) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(id);
    /* need to implement custom a href tag on hover item */
    /* redirect to details route */
    return null;
  };
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <div className={Styles.productWrp} onClick={handleClick} aria-hidden="true">
        <div className={Styles.imgWrp}>
          <img src={image} alt={title} title={title} />
        </div>
        <div className={Styles.productInfoWrp}>
          <div className={Styles.productPrice}>
            <Typography className={Styles.previousPrice}>৳ {prviousPrice}</Typography>
            <Typography className={Styles.currentPrice}>৳ {currentPrice}</Typography>
          </div>
          <Typography variant="body2" className={Styles.productTitle}>
            {title}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};
export default EachNewArrivalProduct;
