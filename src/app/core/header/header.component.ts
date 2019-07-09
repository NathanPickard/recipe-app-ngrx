import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';
// import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
// import { AuthService } from '../../auth/auth.service';
// import * as fromApp from '../../store/app.reducers';
// import * as fromAuth from '../../auth/store/auth.reducers';
// import * as AuthActions from '../../auth/store/auth.actions';
// import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  collapsed = true;
  /* authState: Observable<fromAuth.State> */
  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService
    /* private store: Store<fromApp.AppState> */) { }

  ngOnInit() {
    // this.authState = this.store.select('auth');
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     }
    //   );
    // this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
    // this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.authService.logout();
    // this.store.dispatch(new AuthActions.Logout());
  }

  // isAuthenticated() {
  //   return this.authService.isAuthenticated();
  // }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
