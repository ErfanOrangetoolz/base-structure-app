// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Grid } from "@mui/material";
import { useNavigatorHook } from "third-party-package-handler/RouterHelper";
import Styles from "./css/categories.module.css";

type Category = {
  id: number;
  name: string;
  link: string;
  index?: number | undefined;
};

const EachCategory = ({ id, name, link }: Category) => {
  const navigate = useNavigatorHook();

  const goToLink = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(`/categories/${name}`, { state: { categoryId: id } });
  };

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Box className={Styles.eachCategoryWrp} onClick={goToLink} aria-hidden="true">
        <span className={Styles.categoryTitle}>{name}</span>
        <div className={Styles.categoryImg}>
          <img src={link} alt={name} />
        </div>
      </Box>
    </Grid>
  );
};
export default EachCategory;
