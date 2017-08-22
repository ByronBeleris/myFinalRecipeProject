import { RecipesUsersListRoutingModule } from './recipe-users-list-routing.module';
import { RecipeUserListDetailComponent } from './recipe-user-list-detail/recipe-user-list-detail.component';
import { RecipeUsersListComponent } from './recipe-users-list.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
      RecipeUsersListComponent,
      RecipeUserListDetailComponent
    
  ],
  imports: [
    CommonModule,
    RecipesUsersListRoutingModule,
    SharedModule
  ],
  
})
export class RecipeUsersListModule {}
