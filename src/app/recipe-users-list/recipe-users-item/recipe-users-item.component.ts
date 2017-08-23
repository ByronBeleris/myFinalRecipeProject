import { Recipe } from '../../recipes/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-users-item',
  templateUrl: './recipe-users-item.component.html',
  styleUrls: ['./recipe-users-item.component.css']
})
export class RecipeUsersItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  
  ngOnInit() {
    console.log(this.recipe);
    console.log(this.index);
  }
  
}