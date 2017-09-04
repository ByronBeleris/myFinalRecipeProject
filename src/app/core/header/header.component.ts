// import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent{
  show = false;
  showManage = false;
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

  // onSaveData() {
  //   this.dataStorageService.storeRecipes()
  //     .subscribe(
  //       (response) => {
  //       // (response: HttpEvent<Object>) => {
  //         console.log(response);
  //         // console.log(response.type === HttpEventType.Response);
  //       }
  //     );
  // }

  // onFetchData() {
  //   this.dataStorageService.getMyRecipes();
  // }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  toggleCollapse() {
    this.show = !this.show;
  }
  toggleManage() {
    this.showManage = !this.showManage;
  }
  hideTog() {
    this.show = false;
    this.showManage = false;
  }
    

   
}
