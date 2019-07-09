import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective
  ],
  entryComponents: [AlertComponent],
  providers: [LoggingService]
})
export class SharedModule { }
