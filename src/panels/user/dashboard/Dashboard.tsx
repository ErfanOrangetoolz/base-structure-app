import Categories from "./categories/Categories";
import UpcomingProducts from "./products/upcoming/UpcomingProducts";

const Dashboard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {children}
      <Categories />
      <UpcomingProducts />
      <Products type="latest" />
      <Products type="new arrival" />
      <Brands />
      https://www.binarylogic.com.bd/
    </div>
  );
};
export default Dashboard;
const Products = ({ type = "upcoming" }) => {
  return <p>this is {type} products</p>;
};
const Brands = () => {
  return <p>this is our brand list</p>;
};
