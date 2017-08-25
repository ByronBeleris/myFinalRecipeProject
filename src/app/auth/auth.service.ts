import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  error: any;
  email: string;
  password: string;
  point: boolean;

  constructor(private router: Router) {}

  signupUser(email: string, username: string, password: string, photoUser: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: username,
          photoURL: photoUser
        });
        console.log(this.error);
        console.log(firebase.auth().currentUser);
      })
      .catch(
        error => {
          console.log(error);
          alert(error['message']);
          this.error = error;
        }
        

      );
      if ( this.error === undefined) {
      // this.router.navigate(['/']);               //  Problem with currentUser. Returns null
      // firebase.auth().currentUser.getIdToken()
      // .then(
      //   (token: string) => {
      //     this.token = token;
      //     console.log(firebase.auth().currentUser)}
      // )
      alert('Registration complete. Log in to continue')
      this.router.navigate(['/signin']);
      }

    }

  

  signinUser(email: string, password: string, point: boolean) {
    if (point){
    this.email = email;
    this.password = password;
    this.point = point;
    }
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL); 
        })         
            .then(
              (token: string) => {
                this.token = token;
                console.log(firebase.auth().currentUser)
              }
            )      
      .catch(
        error => console.log(error)
      );
  }
  
  // keepLoggedInUser() {
  //   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  //   .then(() => {
  //     return firebase.auth().signInWithEmailAndPassword(this.email, this.password);
  //   })
  //   .catch((error) => {
  //     this.error = error.message;
  //   });
  // }

  logout() {
    firebase.auth().signOut()
    this.token = null;
    this.error = undefined;
    this.email = null;
    this.password = null;
    this.point = null;
    console.log(this.error);
    console.log(firebase.auth().currentUser);
  }
  destroyUser(){
    if (this.point) {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    }else {
      this.logout();
    }
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
  getUserName() {
    const user = firebase.auth().currentUser;
    console.log(user);    
    let author;
    if (user != null) {
      author = user.displayName;
      return author;
    }else{
      return null;
    }
    
  }
  // getPhoto() {
  //   const user = firebase.auth().currentUser;
  //   let photo;
  //   if (user != null) {
  //     photo = user.photoURL;
  //     return photo;
  //   }
  // }

}
