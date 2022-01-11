import React, { useState } from "react";
import Axios from "axios";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import styled from "styled-components";

import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchIcon,
  SearchComponent,
  SearchInput,
} from "./components/headerComponent";
import {
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoreText,
} from "./components/recipeComponent";

const APP_ID = "c9d4abe1";
const APP_KEY = "3cc789b19047905667109f322e22dd87";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

function App() {
  const [recipeList, updatedRecipeList] = useState([]);
  const [shownRecipe, setShownRecipe] = useState(null);

  const fetchRecipe = async (searchString) => {
    try {
      const response = await Axios.get(
        `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      console.log(response.data);
      updatedRecipeList(response.data.hits);
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    fetchRecipe(document.getElementById("result").value);
  };

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/hamburger-icon.svg" />
          Recipe Finder
        </AppNameComponent>
        <form onSubmit={onSearch}>
          <SearchComponent>
            <SearchIcon onClick={onSearch} src="/search-icon.svg" />
            <SearchInput id="result" placeholder="Search Recipes" />
          </SearchComponent>
        </form>
      </Header>
      <RecipeListContainer>
        <>
          {recipeList.length ? (
            recipeList.map(({ recipe }) => (
              <RecipeContainer
                key={recipe.label + recipe.calories}
                recipeObj={recipe}
              >
                <CoverImage src={recipe.image} />
                <RecipeName>{recipe.label}</RecipeName>
                <IngredientsText onClick={() => setShownRecipe(recipe)}>
                  Ingredients
                </IngredientsText>
                <SeeMoreText onClick={() => window.open(recipe.url)}>
                  See Complete Recipe
                </SeeMoreText>{" "}
              </RecipeContainer>
            ))
          ) : (
            <Placeholder src="/hamburger-icon.svg" />
          )}
        </>
      </RecipeListContainer>
      <Dialog open={shownRecipe ? true : false}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent>
          <DialogActions>
            <IngredientsText onClick={() => window.open(shownRecipe?.url)}>
              See More
            </IngredientsText>
            <SeeMoreText onClick={() => setShownRecipe(null)}>
              Close
            </SeeMoreText>
          </DialogActions>
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {shownRecipe?.ingredients.map((ingredient, i) => (
                <tr key={ingredient.foodId + i}>
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default App;
