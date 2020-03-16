import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { AppEffects } from './app.effects';
import { AppService } from './app.service';
import * as fromReducer from './app.reducer';
import { EntityDataModule, ENTITY_METADATA_TOKEN } from '@ngrx/data';
import { APP_ROUTES } from './app.routes';
import { setInjector } from './services/core';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot({ [fromReducer.appFeatureKey]: fromReducer.reducer }),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [AppService, { provide: ENTITY_METADATA_TOKEN, multi: true, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    setInjector(injector)
  }
}
