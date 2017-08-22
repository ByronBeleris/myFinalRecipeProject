import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  error: any;

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

  

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                console.log(firebase.auth().currentUser)}
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut()
    this.token = null;
    this.error = undefined;
    console.log(this.error);
    console.log(firebase.auth().currentUser);
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
    let author;
    if (user != null) {
      author = user.displayName;
      return author;
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
