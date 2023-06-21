import EachCategory from "./EachCategory";
import Styles from "./css/categories.module.css";

const eachCategory = {
  name: "Server",
  id: 1,
  link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-BPwUN7cazzYDslQC57ybDwd6KEj_PNvhg&usqp=CAU"
};

const Categories: React.FC = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.headerTxt}>FEATURED CATEGORY</h2>
      <div className={Styles.listWrp}>
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
        <EachCategory {...eachCategory} />
      </div>
    </div>
  );
};
export default Categories;
