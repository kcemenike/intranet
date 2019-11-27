import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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


@NgModule({
  declarations: [ExplorerComponent, CollectionComponent, FormComponent, SoloComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromReducer.explorerFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([ExplorerEffects]),
    EntityDataModule,
  ],
  providers: [
    { provide: PLURAL_NAMES_TOKEN, multi: true, useValue: pluralNames },
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ]
})
export class ExplorerModule {
  constructor(eds: EntityDefinitionService) {
    eds.registerMetadataMap(entityMetadata);
  }
}
