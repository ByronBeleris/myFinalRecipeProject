import { concat } from 'rxjs/observable/concat';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put('https://course-project-38263.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    // return this.http.put('https://course-project-38263.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes(),{
    //   observe: 'body'
      // observe: 'events'  // for requests of events. look documentation
    // });

    // const req = new HttpRequest('PUT', 'https://course-project-38263.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   reportProgress: true,
    //   params: new HttpParams().set('auth', token)
    // });
    // return this.http.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'Bearer adfgdsxdfcsd'):  
    //  this wont work with firebase because it makes its own headers

    // this.http.get<Recipe[]>('https://course-project-38263.firebaseio.com/recipes.json?auth=' + token) // 1
    this.http.get<Recipe[]>('https://course-project-38263.firebaseio.com/recipes.json', {  //2
      // observe: 'response',
      observe: 'body',
      // responseType: 'text'  // default is json
      // headers: headers
      params: new HttpParams().set('auth', token)
    })
      .map(
        (recipes) => {
          for (let recipe of recipes) {       //  1
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
          // console.log(recipes);  // 2
          // return [];             // 2
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }


  storeShoppingList() {
    const token = this.authService.getToken();

    return this.http.put('https://course-project-38263.firebaseio.com/shopping-list.json?auth=' + token, this.recipeService.getRecipes());
  }
}
