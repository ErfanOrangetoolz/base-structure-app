import { Grid, Typography } from "@mui/material";
import Styles from "./css/upcoming-product.module.css";

interface UpcomingProduct {
  id: number;
  title: string;
  description?: string | null;
  image: string;
}

const EachUpcomingProduct = ({ id, title, image }: UpcomingProduct) => {
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
        <Typography variant="body2" className={Styles.productTitle}>
          {title}
        </Typography>
      </div>
    </Grid>
  );
};
export default EachUpcomingProduct;
