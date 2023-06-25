/* eslint-disable import/no-extraneous-dependencies */
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
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
      <Typography variant="h4" className={Styles.headerTxt}>
        FEATURED CATEGORY
      </Typography>
      <div className={Styles.listWrp}>
        <Grid container spacing={2}>
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
        </Grid>
      </div>
    </div>
  );
};
export default Categories;
