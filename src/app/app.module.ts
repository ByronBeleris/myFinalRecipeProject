import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module';
import { RecipeUsersListComponent } from './recipe-users-list/recipe-users-list.component';
import { RecipeUserListDetailComponent } from './recipe-users-list/recipe-user-list-detail/recipe-user-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeUsersListComponent,
    RecipeUserListDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
