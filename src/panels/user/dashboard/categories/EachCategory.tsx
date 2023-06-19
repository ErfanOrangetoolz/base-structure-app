import Styles from "./css/categories.module.css";

const EachCategory: React.FC<React.PropsWithChildren> = () => {
  return (
    <div className={Styles.eachCategoryWrp}>
      <span className={Styles.categoryTitle}>First category</span>
      <div className={Styles.categoryImg}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-BPwUN7cazzYDslQC57ybDwd6KEj_PNvhg&usqp=CAU"
          alt="Server"
        />
      </div>
    </div>
  );
};
export default EachCategory;
