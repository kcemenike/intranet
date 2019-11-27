import { Routes } from '@angular/router'
import { CommonComponent } from './common.component'
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.component'
import { ErrorComponent } from './error/error.component'
import { StartComponent } from './start/start.component'
import { TermsComponent } from './terms/terms.component'

export const COMMON_ROUTES: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: 'contacts',
        component: ContactComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'error',
        component: ErrorComponent,
      },
      {
        path: 'start',
        component: StartComponent,
      },
      {
        path: 'terms',
        component: TermsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'start'
      }
    ]
  },
]

export type DeckType = string | 'entities' | 'brands' | 'merchants' | 'contacts'
export const DeckType = ['entities', 'brands', 'merchants', 'contacts']

export interface CommonConfigContract {}

export const COMMON_CONFIG: CommonConfigContract = {}
