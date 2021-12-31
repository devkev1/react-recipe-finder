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
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updatedRecipeList] = useState([]);
  const [show, setShow] = useState(false);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(response.data);
    updatedRecipeList(response.data.hits);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    setTimeout(() => fetchRecipe(e.target.value), 500);
    updateTimeoutId(timeoutId);
  };

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/hamburger-icon.svg" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="Search Recipes" onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        <>
          {recipeList.length ? (
            recipeList.map(({ recipe }) => (
              <RecipeContainer
                key={recipe.label + recipe.calories}
                recipeObj={recipe}
              >
                <Dialog open={show}>
                  <DialogTitle id="alert-dialog-slide-title">
                    Ingredients
                  </DialogTitle>
                  <DialogContent>
                    <DialogActions>
                      <IngredientsText onClick={() => window.open(recipe.url)}>
                        See More
                      </IngredientsText>
                      <SeeMoreText onClick={() => setShow("")}>
                        Close
                      </SeeMoreText>
                    </DialogActions>
                    <table>
                      <thead>
                        <th>Ingredients</th>
                        <th>Weight</th>
                      </thead>
                      <tbody>
                        {recipe.ingredients.map((ingredient) => (
                          <tr>
                            <td>{ingredient.text}</td>
                            <td>{ingredient.weight}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </DialogContent>
                </Dialog>
                <CoverImage src={recipe.image} />
                <RecipeName>{recipe.label}</RecipeName>
                <IngredientsText onClick={() => setShow(true)}>
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
    </Container>
  );
}

export default App;
