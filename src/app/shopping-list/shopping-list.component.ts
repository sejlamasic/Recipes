import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients!:Ingredient[];
  constructor(private slServie:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.slServie.getIngredients();
    this.slServie.ingredientsChanged.subscribe(
      (
       ingredients:Ingredient[])=>{
         this.ingredients=ingredients;
       }
      
    );
  }
  onEditItem(index:number){
this.slServie.startedEditing.next(index);
  }

}
