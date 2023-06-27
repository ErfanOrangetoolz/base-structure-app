import { Box, Button, Grid, Typography } from "@mui/material";
import Styles from "./css/latest-offer-product.module.css";

interface UpcomingProduct {
  id: number;
  title: string;
  description?: string | null;
  image: string;
  prviousPrice: number | string;
  currentPrice: number | string;
  discount: number | string;
}

const EachLatestOfferProduct = ({
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
    <Grid item xs={12} sm={6} lg={4}>
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

          <Box textAlign={"center"}>
            <Button variant="contained" size="small" sx={{ fontSize: 12 }}>
              BUY NOW
            </Button>
          </Box>
        </div>
      </div>
    </Grid>
  );
};
export default EachLatestOfferProduct;
