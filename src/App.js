import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import {Header, AppNameComponent, AppIcon, SearchIcon, SearchComponent, SearchInput} from './components/headerComponent';
import {RecipeListContainer, RecipeContainer, CoverImage, RecipeName, IngredientsText, SeeMoreText} from './components/recipeComponent';

const APP_ID = "c9d4abe1";
const APP_KEY = "3cc789b19047905667109f322e22dd87";

const Container = styled.div `
  display: flex;
  flex-direction: column;
`;

function App() {
  const [timeoutId, updateTimeoutId] = useState();

  const fetchRecipe = (searchString)=> {
    Axios.get(`{}`)
  }

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => console.log("API call"), 500);
    updateTimeoutId(timeoutId)
  };

  return (
    <Container>
      <Header>
        <AppNameComponent><AppIcon src="/hamburger-icon.svg" />Recipe Finder</AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="Search Recipes" onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
      <RecipeContainer>
        <CoverImage src="/hamburger-icon.svg" />
        <RecipeName>Food Name</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Recipe</SeeMoreText>
      </RecipeContainer>
      </RecipeListContainer>
    </Container>
  );
}

export default App;
