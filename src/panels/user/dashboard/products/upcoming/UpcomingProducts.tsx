import EachUpcomingProduct from "./EachUpcomingProduct";
import Styles from "./css/upcoming-product.module.css";

const UpcomingProducts: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h2 className={Styles.headerTxt}>Upcoming Products</h2>
      </div>
      <div className={Styles.productsWrp}>
        <EachUpcomingProduct />
        <EachUpcomingProduct />
        <EachUpcomingProduct />
        <EachUpcomingProduct />
        <EachUpcomingProduct />
        {/* <EachUpcomingProduct /> */}
      </div>
    </div>
  );
};
export default UpcomingProducts;
