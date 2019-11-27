import { UrlSegment, UrlSegmentGroup, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ActionsContract, UserContract, BrandContract, PersonContract, PageContract, SubscribeContract, AppMetaContract, JSONContract } from './services/contracts';
import { environment } from 'src/environments/environment';
import { titleCase } from './services/core';

export const ENTITIES: string[] = [
  'area',
  'article',
  'branch',
  'company',
  'country',
  'department',
  'event',
  'feedback',
  'file',
  'forum',
  'topic',
  'idea',
  'photo',
  'role',
  'setting',
  'state',
  'team',
  'user',
  'role',
]

export function entityMatcher(
  segments: UrlSegment[],
  segmentGroup: UrlSegmentGroup,
  route: Route
) {
  return (
    segments.length > 0 &&
    ENTITIES.includes(segments[0].path.toLowerCase())
  ) ? ({ consumed: [segments[0]] })
    : null
}

export const APP_ROUTES: Routes = [
  {
    matcher: entityMatcher,
    loadChildren: './features/explorer/explorer.module#ExplorerModule',
  },
  {
    path: 'user',
    loadChildren: './features/user/user.module#UserModule',
  },
  {
    path: 'gate',
    loadChildren: './features/gate/gate.module#GateModule'
  },
  {
    path: 'docs',
    loadChildren: './features/docs/docs.module#DocsModule'
  },
  {
    path: 'events',
    loadChildren: './features/events/events.module#EventsModule'
  },
  {
    path: 'forums',
    loadChildren: './features/forums/forums.module#ForumsModule'
  },
  {
    path: 'ideas',
    loadChildren: './features/ideas/ideas.module#IdeasModule'
  },
  {
    path: 'news',
    loadChildren: './features/news/news.module#NewsModule'
  },
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: './features/common/common.module#CommonModule'
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];

export const primaryActions: ActionsContract[] = [
  {
    title: 'Home',
    icon: 'person_add',
    url: '',
    type: 'raised-button',
  },
  {
    title: 'News',
    icon: 'person_add',
    url: 'news',
    type: 'raised-button',
  },
  {
    title: 'Docs',
    icon: 'person_add',
    url: 'docs',
    type: 'raised-button',
  },
  {
    title: 'Events',
    icon: 'person_add',
    url: 'events',
    type: 'raised-button',
  },
  {
    title: 'Forums',
    icon: 'person_add',
    url: 'forums',
    type: 'raised-button',
  },
  {
    title: 'Ideas',
    icon: 'person_add',
    url: 'ideas',
    type: 'raised-button',
  },
]

export const secondaryActions: ActionsContract[] = ENTITIES.map((entity => {
  return {
    title: titleCase(entity),
    icon: 'person_add',
    url: entity.toLowerCase(),
    type: 'raised-button',
  }
}))

export const tertiaryActions: ActionsContract[] = [
  {
    title: 'About Us',
    url: 'about'
  },
  {
    title: 'Contact Us',
    url: 'contacts'
  },
  {
    title: 'Terms of Service',
    url: 'terms' 
  }
]

export const personActions: (user?: UserContract) => ActionsContract[] = (user?: UserContract) => {
  if (!user) {
    return [
      {
        title: 'Login',
        url: 'gate/sign-in'
      },
      {
        title: 'Register',
        url: 'gate/sign-up'
      },
    ]
  }

  return [
    {
      title: 'Dashboard',
      url: 'user/dashboard' 
    },
    {
      title: 'Profile',
      url: 'user/profile',
      type: 'raised-button'
    },
    {
      title: 'Preference',
      url: 'user/preference',
      type: 'raised-button'
    },
    ...((['admin'].includes(user.type)) ? [{
      title: 'Settings',
      url: 'user/settings',
      type: 'raised-button'
    }] : []),
    {
      title: 'Change Password',
      url: 'user/change-password',
      type: 'raised-button'
    },
    {
      title: 'Sign Out',
      url: 'g/sign-out'
    },
  ]
}

export const AUTO_JSON_COLUMNS = [
  'avatar',
  'banner',
]

export const BASE_URL = environment.production
  ? 'https://portal.fipl-ng.com'
  : 'http://localhost:8000'

export const APP_BASE_CONFIG = {
  urls: {
    upload: BASE_URL + '/upload',
    signIn: '/',
    dashboard: '/',
  },
  store: {
    remote: {
      urls: {
        base: BASE_URL,
        APIbase: BASE_URL + '/api',
      },
      client: {
        id: '1b81f410-659a-11e8-8c79-07f0e6940a88',
        secret: 'C8ftwf2BB500f8CASviabG33GqhhNFBNGpverBeA',
      },
    },
    local: {
      initialValues: {},
      schema: {},
    },
    session: {
      initialValues: {},
    },
    client: {
      initialValues: {},
      schema: {},
    },
  },
  vendor: {
    paystack: {
      public: 'pk_test_40a923a3eedaccc4478ab5392341115ccc396412',
    },
    tawk: {},
    analytics: {},
    openWeather: {}
  },
  spy: {
    urls: {
      session: 'sessions',
      page: 'pages',
      event: 'activities',
    },
  },
  uploader: {
    server: {
      urls: {
        upload: 'upload',
        deload: 'deload',
        download: 'download',
      },
    },
  },
}

export interface AppConfigContract extends JSONContract {
  brand: BrandContract
  person: PersonContract
  page: PageContract
  entities: string[]
  actions: {
    primary: ActionsContract[]
    secondary: ActionsContract[]
    tertiary: ActionsContract[]
    person: ActionsContract[]
    [key: string]: ActionsContract[]
  },
  meta: AppMetaContract,
  preference: JSONContract
  settings: JSONContract
  ui: {
    [key: string]: boolean
  }
}

export const APP_CONFIG: AppConfigContract = {
  brand: {
    name: 'intranet',
    slogan: '...',
    logo: { url: 'assets/imgs/logo.png', title: 'Intranet Logo' },
    contact: {
      telephone: null,
      email: null,
      address: null,
    },
  },
  person: {
    name: null,
    avatar: { url: '', title: '' },
  },
  page: null,
  entities: ENTITIES,
  actions: {
    primary: primaryActions,
    secondary: secondaryActions,
    tertiary: tertiaryActions,
    person: personActions(),
  },
  meta: { title: 'intranet.com', dateTime: '2019', version: 'v0.0.0' },
  preference: {},
  settings: {},
  ui: {
    sidebar: true,
  },
}
