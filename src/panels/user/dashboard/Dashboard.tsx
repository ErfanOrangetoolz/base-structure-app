import Categories from "./categories/Categories";
import LatestOffer from "./products/lates-offer/LatestOffer";
import NewArrivalProducts from "./products/new-arrival/NewArrivalProducts";
import UpcomingProducts from "./products/upcoming/UpcomingProducts";

const Dashboard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {children}
      <Categories />
      <UpcomingProducts />
      <LatestOffer />
      <NewArrivalProducts />
      {/* <Brands /> */}
      https://www.binarylogic.com.bd/
    </div>
  );
};
export default Dashboard;
