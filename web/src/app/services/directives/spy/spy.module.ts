import { NgModule, ModuleWithProviders } from '@angular/core'
import { SpyDirective } from './spy.directive'
import { SpyService } from './spy.service'

@NgModule({
  declarations: [ SpyDirective ],
  imports: [],
  exports: [ SpyDirective ]
  })
export class SpyModule {
  public static forRoot (): ModuleWithProviders {
    return {
      ngModule: SpyModule,
      providers: [ SpyService ]
    }
  }

  public static forChild (): ModuleWithProviders {
    return {
      ngModule: SpyModule,
      providers: []
    }
  }
}
