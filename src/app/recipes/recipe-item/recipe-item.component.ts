import { OnDestroy } from '@angular/core'
import { Component, Input, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit, OnDestroy {
  @Input() recipeItem: Recipe

  constructor() {}

  ngOnInit() {
    console.log('recipeItem', this.recipeItem)
  }

  ngOnDestroy(): void {}
}
