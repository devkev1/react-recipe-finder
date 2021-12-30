import React, { useState } from "react";
import Axios from "axios";
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

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updatedRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(response.data);
    updatedRecipeList(response.data.hits);
    //[{name: "test"}]
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
        {recipeList.length &&
          recipeList.map((recipeObj) => (
            <RecipeContainer recipeObj={recipeObj.recipe}>
              <CoverImage src={recipeObj.image} />
              <RecipeName>{recipeObj.label}</RecipeName>
              <IngredientsText>Ingredients</IngredientsText>
              <SeeMoreText onClick={()=>window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>{" "}
            </RecipeContainer>
          ))}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
