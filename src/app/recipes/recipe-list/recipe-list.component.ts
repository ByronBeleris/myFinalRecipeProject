import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  user: any;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.user = this.authService.getUserName();

    this.dataStorageService.getMyRecipes();
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
          // console.log('1223');
          // console.log(recipes);
        }
      );
    const name = JSON.parse(localStorage.getItem('currentUser'));
    this.user = name.username;

    // this.user = this.authService.getUserName();

    // console.log('Kalispera' + this.user.username);
    // if (this.user != null){
    //     console.log('eftase edw');
    //     console.log("to username einai " + this.user);
    //   //  this.dataStorageService.getMyRecipes();
    //    console.log(this.recipes);
    // }
    // console.log("to username einai " + this.user); 
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    // console.log(this.recipes);
    this.subscription.unsubscribe();
  }
}