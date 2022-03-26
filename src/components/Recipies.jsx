import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Grid,
  Button,
  Box
} from "@mui/material";
import { useContext } from "react";
import { RecipiesContext } from "../context/GeneralContext";
import { Link } from "react-router-dom";

function Recipies() {
  const { allRecipies } = useContext(RecipiesContext);
  const styleHeader = {
    height: 50
  };
  return (
    <div>
      {console.log(allRecipies)}
      <h1>This is my Recipies</h1>
      <Grid container spacing={2} style={styleHeader}>
        {allRecipies.map((recipe) => {
          return (
            <Grid item xs={6} md={3}>
              <Card>
                <CardHeader title={recipe.recipe.label} />
                <Divider />
                <CardContent>
                  <CardMedia
                    component="img"
                    image={recipe.recipe.image}
                    height="200"
                  />
                </CardContent>
              </Card>
              <Button>
                <Link to={`/Recipe/${recipe.recipe.label}`}>See More</Link>
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Recipies;
