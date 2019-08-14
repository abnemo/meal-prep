import { Ingredient } from './ingredient.model';

export interface Recipe {
  id: string,
  dateCreated: number,
  title: string,
  ingredients: Ingredient[],
  instructions: string,
  links?: string
}