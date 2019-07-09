import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })

export class DataStorageService {

  constructor(private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://ng-recipe-book-1346d.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });


    // const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'Bearer bearerName');

    // return this.httpClient.put('https://ng-recipe-book-1346d.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: headers
    // });
    //   const req = new HttpRequest('PUT', 'https://ng-recipe-book-1346d.firebaseio.com/recipes.json',
    //     this.recipeService.getRecipes(),
    //     { reportProgress: true/*, params: new HttpParams().set('auth', token)*/ })

    //   return this.httpClient.request(req);
  }

  fetchRecipes() {

    return this.http.get<Recipe[]>('https://ng-recipe-book-1346d.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }

  // getRecipes() {
  // const token = this.authService.getToken();

  // this.httpClient.get<Recipe[]>('https://ng-recipe-book-1346d.firebaseio.com/recipes.json?auth=' + token)
  //     this.httpClient.get<Recipe[]>('https://ng-recipe-book-1346d.firebaseio.com/recipes.json',
  //       {
  //         observe: 'body',
  //         responseType: 'json'
  //       })
  //       .map(
  //         (recipes) => {
  //           console.log(recipes)
  //           for (let recipe of recipes) {
  //             if (!recipe['ingredients']) {
  //               console.log(recipe);
  //               recipe['ingredients'] = [];
  //             }
  //           }
  //           return recipes;
  //         }
  //       )
  //       .subscribe(
  //         (recipes: Recipe[]) => {
  //           this.recipeService.setRecipes(recipes);
  //         }
  //       );
  //   }
}
