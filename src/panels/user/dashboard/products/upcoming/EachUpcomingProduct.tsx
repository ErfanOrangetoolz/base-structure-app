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
    <div className={Styles.productWrp} onClick={handleClick} aria-hidden="true">
      <div className={Styles.imgWrp}>
        <img src={image} alt={title} title={title} />
      </div>
      <h4 className={Styles.productTitle}>{title}</h4>
    </div>
  );
};
export default EachUpcomingProduct;
