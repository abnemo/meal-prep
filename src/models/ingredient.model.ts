export interface Ingredient {
  id: string;
  ingredient: any;
  name: string,
  quantity: number,
  measurement: string,
  expiration?: Date,
  price?: number
}