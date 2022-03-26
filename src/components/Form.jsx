import { TextField, Grid, FormControl, Box } from "@mui/material";
import { useContext } from "react";
import { RecipiesContext } from "../context/GeneralContext";
import { debounce } from "lodash";

function Form() {
  const { recipeToSearch, setRecipeToSearch } = useContext(RecipiesContext);

  const handleWithDebounce = debounce((value) => {
    setRecipeToSearch(value);
  }, 500);
  return (
    <Grid container spacing={2}>
      <Grid item xs={1} md={3}></Grid>
      <Grid item xs={10} md={6}>
        <Box xs={{ m: "2rem" }}>
          <FormControl>
            <TextField
              type="text"
              onChange={(e) => handleWithDebounce(e.target.value)}
            />
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={1} md={3}></Grid>
    </Grid>
  );
}

export default Form;
