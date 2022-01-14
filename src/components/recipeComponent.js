import styled from 'styled-components';

export const RecipeListContainer = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  margin-top: -32px;
  gap: 20px;
  justify-content: space-evenly;
`;

export const RecipeContainer = styled.div `
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

export const CoverImage = styled.img `
  height: 200px;
  object-fit: cover;
`;

export const RecipeName = styled.span `
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

export const IngredientsText = styled.span `
  font-size: 18px;
  border: solid 1px green;
  color: black;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
  margin-bottom: 12px;
`;

export const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;

export const Button = styled.button `
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 34px 10px;
cursor: pointer;
width: 150px;
`