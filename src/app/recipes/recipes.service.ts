import { Injectable } from '@angular/core'
import { Recipe } from './recipe.model'

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://www.destinomunique.com.br/wp-content/uploads/2014/11/Weinbauer-Schnitzel-Munique.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://www.sabornamesa.com.br/media/k2/items/cache/1da7a0ac7a34d319d36fde2ba2a083ea_XL.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
  ]
  constructor() {}

  getAllRecipes() {
    return [...this.recipes]
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId
      }),
    }
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId
    })
  }
}
