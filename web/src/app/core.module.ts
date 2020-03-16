import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './webgets/header/header.module';
import { CONFIG_DATA, PRIVILEGE_ENTITIES_DATA, PRIVILEGE_USERS_DATA, AUTO_JSON_CONFIG, ASSET_LOCATION } from './services/core';
import { APP_BASE_CONFIG, AUTO_JSON_COLUMNS } from './app.config';
import { RouterStateSerializer } from '@ngrx/router-store';
import { LoaderServiceContract, AuthInterceptor, NotifInterceptor } from './services/interceptors';
import { Params, RouterStateSnapshot } from '@angular/router';
import { ToastModule } from './webgets/toast/toast.module';
import { FooterModule } from './webgets/footer/footer.module';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root

    while (route.firstChild) {
      route = route.firstChild
    }

    const {
      url,
      root: { queryParams },
    } = routerState
    const { params } = route

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams }
  }
}

export class LoaderService implements LoaderServiceContract {
  // private app: AppService
  // private notif: NotifService

  start(type: string) {
    // this.app = outject(AppService)
    // this.app.startActivity(type)
  }

  stop() {
    // this.app = outject(AppService)
    // this.app.stopActivity()
  }

  notify(message: string, title?: string) {
    // this.app = outject(AppService)
    // this.app.notify(message, title)
  }

  toast(message: string, action?: string) {
    // this.notif = outject(NotifService)
    // this.notif.toast(message, action)
  }
}

@NgModule({
  providers: [
    { provide: CONFIG_DATA, useValue: APP_BASE_CONFIG },
      
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    { provide: CONFIG_DATA, useValue: APP_BASE_CONFIG },
    { provide: PRIVILEGE_ENTITIES_DATA, useValue: {} },
    { provide: PRIVILEGE_USERS_DATA, useValue: {} },
    { provide: LoaderServiceContract, useClass: LoaderService },
    { provide: AUTO_JSON_CONFIG, useValue: AUTO_JSON_COLUMNS },
    { provide: ASSET_LOCATION, useValue: 'assets' },
    
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: StoreSyncInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotifInterceptor, multi: true }
  ],
  imports: [
    FormlyModule.forRoot(),
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyModule,
    FormlyBootstrapModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FontAwesomeModule,
    HeaderModule,
    FooterModule,
    ToastModule,
  ],
})
export class CoreModule { 
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error(
        `CoreModule has already been loaded. Import Core modules in the AppModule only.`,
      )
    }
  }
}
