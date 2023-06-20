import Styles from "./css/brand.module.css";

interface EachBrandProps {
  id: number;
  title: string;
  image: string;
  link: string;
}

const EachBrand = ({ id, title, image }: EachBrandProps) => {
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
    </div>
  );
};
export default EachBrand;
