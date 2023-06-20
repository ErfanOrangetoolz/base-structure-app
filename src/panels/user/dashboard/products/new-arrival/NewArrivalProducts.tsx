import EachNewArrivalProduct from "./EachNewArrivalProduct";
import Styles from "./css/new-arrival-product.module.css";

const product = {
  id: 1,
  title: "GIGABYTE GeForce RTX 4070 Ti 12GB...",
  image:
    "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  prviousPrice: 152.34,
  currentPrice: 102.34,
  discount: "10%"
};

const NewArrivalProducts: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h2 className={Styles.headerTxt}>New Arrivals</h2>
      </div>
      <div className={Styles.productsWrp}>
        <EachNewArrivalProduct {...product} />
        <EachNewArrivalProduct {...product} />
        <EachNewArrivalProduct {...product} />
        <EachNewArrivalProduct {...product} />
        <EachNewArrivalProduct {...product} />
        <EachNewArrivalProduct {...product} />
        <EachNewArrivalProduct {...product} />
        <EachNewArrivalProduct {...product} />
        <EachNewArrivalProduct {...product} />
      </div>
    </div>
  );
};
export default NewArrivalProducts;
