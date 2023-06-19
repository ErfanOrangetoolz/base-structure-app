import Styles from "./css/upcoming-product.module.css";

const EachUpcomingProduct = () => {
  return (
    <div className={Styles.productWrp}>
      <div className={Styles.imgWrp}>
        <img
          src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="test 1"
          title="title"
        />
      </div>
      <h4 className={Styles.productTitle}>
        GIGABYTE GeForce RTX 4070 Ti 12GB GDDR6X EAGLE OC Graphics Card
      </h4>
    </div>
  );
};
export default EachUpcomingProduct;
