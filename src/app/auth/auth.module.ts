import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AuthComponent } from "./auth.component";
// import { SigninComponent } from "./signin/signin.component";
// import { SignupComponent } from "./signup/signup.component";
// import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // SigninComponent,
    // SignupComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
    // AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
