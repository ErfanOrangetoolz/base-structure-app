import EachCategory from "./EachCategory";
import Styles from "./css/categories.module.css";

const Categories: React.FC = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.headerTxt}>FEATURED CATEGORY</h2>
      <div className={Styles.listWrp}>
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
        <EachCategory />
      </div>
    </div>
  );
};
export default Categories;
