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
    <div className={Styles.productWrp} onClick={handleClick} aria-hidden="true">
      <div className={Styles.imgWrp}>
        <img src={image} alt={title} title={title} />
      </div>
      <div className={Styles.productInfoWrp}>
        <div className={Styles.productPrice}>
          <span className={Styles.previousPrice}>৳ {prviousPrice}</span>
          <span className={Styles.currentPrice}>৳ {currentPrice}</span>
        </div>
        <h4 className={Styles.productTitle}>{title}</h4>
      </div>
    </div>
  );
};
export default EachLatestOfferProduct;
