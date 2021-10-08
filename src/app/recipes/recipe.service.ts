import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
recipesChanged=new Subject<Recipe[]>();
recipeSelected=new EventEmitter<Recipe>();
private  recipes:Recipe[]=[
new Recipe('Tasty Schnitzel', 
'This is a simply test',
'https://thumbs.dreamstime.com/z/tasty-schnitzel-cucumber-salad-white-plate-close-up-view-106318962.jpg',
[
    new Ingredient('Meat',1),
    new Ingredient('French Fries',20)
]),
new Recipe('Big Fat Burger',
 'This is a test',
 'https://pbs.twimg.com/media/DLzFZxSUQAA-zJB?format=jpg&name=large',
 [
     new Ingredient('Meat',1),
     new Ingredient('Buns',2)
 ])
      ]; 


constructor(private slService:ShoppingListService){

}
     setRecipes(recipes:Recipe[]){
       this.recipes=recipes;
       this.recipesChanged.next(this.recipes.slice());
      }
      getRecipes(){
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
         this.slService.addIngredients(ingredients);
      }

      getRecipe(id:number){
           return this.recipes[id];
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number, newRecipe:Recipe){

            this.recipes[index]=newRecipe;
      }
      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
}