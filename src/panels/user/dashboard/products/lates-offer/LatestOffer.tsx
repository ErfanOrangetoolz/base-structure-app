import EachLatestOfferProduct from "./EachLatestOfferProduct";
import Styles from "./css/latest-offer-product.module.css";

const product = {
  id: 1,
  title: "GIGABYTE GeForce RTX 4070 Ti 12GB GDDR6X EAGLE OC Graphics Card",
  image:
    "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  prviousPrice: 152.34,
  currentPrice: 102.34,
  discount: "10%"
};

const LatestOffer: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h2 className={Styles.headerTxt}>Latest Offer</h2>
      </div>
      <div className={Styles.productsWrp}>
        <EachLatestOfferProduct {...product} />
        <EachLatestOfferProduct {...product} />
        <EachLatestOfferProduct {...product} />
        <EachLatestOfferProduct {...product} />
        <EachLatestOfferProduct {...product} />
        <EachLatestOfferProduct {...product} />
        <EachLatestOfferProduct {...product} />
        <EachLatestOfferProduct {...product} />
        <EachLatestOfferProduct {...product} />
      </div>
    </div>
  );
};
export default LatestOffer;
