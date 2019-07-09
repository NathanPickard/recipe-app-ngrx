import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoggingService } from './logging.service';
// import { RecipesModule } from './recipes/recipes.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';
// import { AuthModule } from './auth/auth.module';
// import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';
// import { reducers } from './store/app.reducers';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';

// import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "my-app" }),
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    // RecipesModule,
    // ShoppingListModule,
    // AuthModule,
    // StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([AuthEffects]),
    // StoreRouterConnectingModule,
    // !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})

export class AppModule { }
