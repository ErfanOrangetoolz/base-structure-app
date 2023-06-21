/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocationHook, useNavigatorHook } from "third-party-package-handler/RouterHelper";
import EachProduct from "./EachProduct";

const category = {
  id: 12,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBIy4nua2A6YJPNFdcLDXpuR7bU4NYH53sw&usqp=CAU",
  status: 1,
  title: "this is title",
  description: "",
  price: 1234.34,
  discount: 5
};

const CategoryDetails = () => {
  const localtion = useLocationHook();
  const navigate = useNavigatorHook();
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(null);
  console.log("for getting category information", id);

  /* {localtion.pathname.replace("/categories/", "")} */

  useEffect(() => {
    if (localtion.state) {
      const { categoryId } = localtion.state;
      if (categoryId) {
        setId(categoryId);
        setIsLoading(false);
      } else {
        navigate("/categories");
        return;
      }
    } else {
      navigate("/categories");
      return;
    }
  }, []);

  const renderLoader = () => {
    return <div>is loading...</div>;
  };
  const renderView = () => {
    return (
      <div>
        <div>
          <EachProduct {...category} />
          <EachProduct {...category} />
          <EachProduct {...category} />
          <EachProduct {...category} />
          <EachProduct {...category} />
          <EachProduct {...category} />
          <EachProduct {...category} />
        </div>
      </div>
    );
  };

  return <div>{isLoading ? renderLoader() : renderView()}</div>;
};
export default CategoryDetails;
