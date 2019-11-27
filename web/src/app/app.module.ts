import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { APP_ROUTES } from './app.config';
import { AppEffects } from './app.effects';
import { AppService } from './app.service';
import * as fromReducer from './app.reducer';
import { EntityDataModule } from '@ngrx/data';
import { HeaderModule } from './webgets/header/header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from './webgets/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot({ [fromReducer.appFeatureKey]: fromReducer.reducer }),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    HttpClientModule,
    HttpClientJsonpModule,

    FontAwesomeModule,
    HeaderModule,
    SidebarModule, 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
