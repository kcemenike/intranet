import { NgModule } from '@angular/core';
import { ExplorerComponent } from './explorer.component';
import { CollectionComponent } from './collection/collection.component';
import { FormComponent } from './form/form.component';
import { SoloComponent } from './solo/solo.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityDefinitionService, PLURAL_NAMES_TOKEN, DefaultDataServiceConfig } from '@ngrx/data';
import * as fromReducer from './explorer.reducer'
import { entityMetadata, defaultDataServiceConfig, pluralNames } from './explorer.config';
import { ExplorerEffects } from './explorer.effects';
import { SharedModule } from 'src/app/shared.module';
import { EXPLORER_ROUTES } from './explorer.routes';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'src/app/webgets/sidebar/sidebar.module';


@NgModule({
  declarations: [
    ExplorerComponent, 
    CollectionComponent, 
    FormComponent,
    SoloComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(EXPLORER_ROUTES),
    StoreModule.forFeature(fromReducer.explorerFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([ExplorerEffects]),
    EntityDataModule,
    SidebarModule,
  ],
  providers: [
    { provide: PLURAL_NAMES_TOKEN, multi: true, useValue: pluralNames },
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ]
})
export class ExplorerModule {
  constructor(eds: EntityDefinitionService) {
    console.log({entityMetadata})
    eds.registerMetadataMap(entityMetadata)
    console.log(eds.getDefinition('User'))
  }
}
