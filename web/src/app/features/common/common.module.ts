import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { StartComponent } from './start/start.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { EffectsModule } from '@ngrx/effects';
import { CommonEffects } from './common.effects';
import { COMMON_ROUTES } from './common.routes';
import { SharedModule } from 'src/app/shared.module';
import { ArticleModule } from 'src/app/webgets/article/article.module';
import * as fromReducer from './common.reducer';
import { StoreModule } from '@ngrx/store';

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
    SharedModule,
    RouterModule.forChild(COMMON_ROUTES),
    StoreModule.forFeature(fromReducer.commonFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([CommonEffects]),
    ArticleModule,
  ],
  exports: []
})
export class CommonModule { }
