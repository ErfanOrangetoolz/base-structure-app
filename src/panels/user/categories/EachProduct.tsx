import Styles from "./css/each-product.module.css";

interface category {
  id: number;
  image: string;
  status: number;
  title: string;
  description: string | object | null;
  price: number | null;
  discount: number | null;
}
interface description {
  info: string;
}

const EachProduct = ({ id, image, status, title, description, price, discount }: category) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imageWrp}>
        <img src={image} alt={title} />
      </div>
      <div className={Styles.infoWrp}>
        <h3 className={Styles.title}>{title}</h3>
        <div className={Styles.descriptionWrp}>
          <EachDescription info={`Model: X570D4U Micro-ATX (9.6" x 9.6")`} />
          <EachDescription info={`Supports AMD Ryzen™ 5000 Series Desktop Processors`} />
          <EachDescription info={`4 DIMM slots (2DPC), supports DDR4 ECC/non-ECC UDIMM`} />
          <EachDescription info={`Supports 2 M.2 (PCIe4.0 x4 or SATA 6Gb/s)`} />
        </div>
        <div>
          <div>
            <span>previous {price}</span>
            <span>current {discount}</span>
          </div>
          <div>details button : {id}</div>
        </div>
      </div>

      <div>{status}</div>
    </div>
  );
};
export default EachProduct;

const EachDescription = ({ info }: description) => {
  return (
    <div className={Styles.eachDesWrp}>
      <span className={Styles.dot}></span>
      <span>{info}</span>
    </div>
  );
};
