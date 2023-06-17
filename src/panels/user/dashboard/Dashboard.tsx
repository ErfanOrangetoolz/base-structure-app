const Dashboard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      This is from dashboard layout
      {children}
      dashboard: category list, upcoming product, latest product, new arrival products, brands
    </div>
  );
};
export default Dashboard;
