import { NgModule } from '@angular/core';
import { CommonModule as CommonNGModule } from '@angular/common';
import { CommonComponent } from './common.component';
import { StartComponent } from './start/start.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { COMMON_ROUTES } from './common.config';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonEffects } from './common.effects';

@NgModule({
  declarations: [
    CommonComponent,
    StartComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    TermsComponent,
  ],
  imports: [
    CommonNGModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(COMMON_ROUTES),
    // StoreModule.forFeature('common', reducer),
    EffectsModule.forFeature([CommonEffects])
  ],
  exports: []
})
export class CommonModule { }
