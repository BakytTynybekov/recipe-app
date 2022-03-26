import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const RecipiesContext = createContext([]);

export const GeneralProvider = ({ children }) => {
  const [allRecipies, setAllRecipies] = useState([]);
  const [recipeToSearch, setRecipeToSearch] = useState("chicken");

  const CallToApi = async () => {
    const req = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeToSearch}&app_id=0bdeedf5&app_key=f74d3a04711a155c2a76c5c48a327903`
    );

    setAllRecipies(req.data.hits);
  };

  useEffect(() => {
    CallToApi();
  }, [recipeToSearch]);
  const data = {
    allRecipies: allRecipies,
    setAllRecipies: setAllRecipies,
    recipeToSearch: recipeToSearch,
    setRecipeToSearch: setRecipeToSearch
  };
  return (
    <RecipiesContext.Provider value={data}>{children}</RecipiesContext.Provider>
  );
};
