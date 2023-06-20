import EachBrand from "./EachBrand";
import Styles from "./css/brand.module.css";

const product = {
  id: 1,
  title: "GIGABYTE GeForce RTX 4070 Ti 12GB GDDR6X EAGLE OC Graphics Card",
  image:
    "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  link: ""
};

const Brands: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h2 className={Styles.headerTxt}>Our Brand</h2>
      </div>
      <div className={Styles.productsWrp}>
        <EachBrand {...product} />
        <EachBrand {...product} />
        <EachBrand {...product} />
        <EachBrand {...product} />
        <EachBrand {...product} />
        <EachBrand {...product} />
        <EachBrand {...product} />
        <EachBrand {...product} />
        <EachBrand {...product} />
      </div>
    </div>
  );
};
export default Brands;
