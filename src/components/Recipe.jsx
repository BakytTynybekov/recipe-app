import { CardMedia, Grid, Tab } from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipiesContext } from "../context/GeneralContext";
import DrawerMenu from "./Drawer";

function Recipe() {
  const [value, setValue] = useState("1");
  const { recipe } = useParams();
  const { allRecipies } = useContext(RecipiesContext);

  const data = allRecipies.filter((element) => element.recipe.label === recipe);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <DrawerMenu />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia component="img" image={data[0].recipe.image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label="description">
              <Tab label="Ingredients" value="1"></Tab>
              <Tab label="Nutritional Value" value="2"></Tab>
              <Tab label="Something" value="3"></Tab>
            </TabList>
            <TabPanel value="1">Panel 1</TabPanel>
            <TabPanel value="2">Panel 2</TabPanel>
            <TabPanel value="3">Panel 3</TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </div>
  );
}

export default Recipe;
