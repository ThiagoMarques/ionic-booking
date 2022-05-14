import { OnDestroy } from '@angular/core'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AlertController } from '@ionic/angular'
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipes.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController,
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        //redirect
        return
      }
      const recipeId = paramMap.get('recipeId')
      this.loadedRecipe = this.recipesService.getRecipe(recipeId)
    })
  }

  ngOnDestroy(): void {}

  onDeleteRecipe() {
    this.alertCtrl
      .create({
        header: 'Deletar item',
        message: 'Você deseja deletar o item?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Deletar',
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present()
      })
    this.recipesService.deleteRecipe(this.loadedRecipe.id)
    this.router.navigate(['/recipes'])
  }
}
