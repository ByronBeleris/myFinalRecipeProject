import { Recipe } from '../../recipes/recipe.model';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user= '';
  user1;
  showSpinner = true;
  // subscription;
  // recipes;
  constructor(private authService: AuthService,
              private recipeService: RecipeService) { }

   ngOnInit() {
    this.user = localStorage.getItem('currentUser');
    console.log('apo to home' + this.user);
   
    this.user = this.authService.getUserName();
   
  }
  isAuthenticated() {
    if (this.authService.getCurrentUserInfo()){
    if (this.authService.getCurrentUserInfo().photoURL != null){
      this.user = this.authService.getCurrentUserInfo().displayName;
    }  
  }
    return this.authService.isAuthenticated();
  }

}
