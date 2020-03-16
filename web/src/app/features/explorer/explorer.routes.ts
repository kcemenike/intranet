import { Routes } from '@angular/router';
import { ExplorerComponent } from './explorer.component';
import { FormComponent } from './form/form.component';
import { SoloComponent } from './solo/solo.component';
import { CollectionComponent } from './collection/collection.component';

export const EXPLORER_ROUTES: Routes = [
    {
      path: '',
      component: ExplorerComponent,
      children: [
        {
          path: 'create',
          data: { action: 'create'},
          component: FormComponent
        },
        {
          path: ':id/edit',
          data: { action: 'edit'},
          component: FormComponent
        },
        {
          path: ':id',
          component: SoloComponent
        },
        {
          path: '',
          component: CollectionComponent
        }
      ]
    }
  ]
  