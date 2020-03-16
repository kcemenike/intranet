import { UrlSegment, Routes } from '@angular/router';
import { ENTITIES } from './app.config';

export function entityMatcher(
    segments: UrlSegment[],
) {
    console.log(segments)
    return (
        segments.length > 1 &&
        segments[0].path.toLowerCase() == 'entity' &&
        ENTITIES.includes(segments[1].path.toLowerCase())
    ) ? ({ consumed: [segments[0], segments[1]] })
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
    // {
    //   path: 'docs',
    //   loadChildren: './features/docs/docs.module#DocsModule'
    // },
    // {
    //   path: 'events',
    //   loadChildren: './features/events/events.module#EventsModule'
    // },
    // {
    //   path: 'forums',
    //   loadChildren: './features/forums/forums.module#ForumsModule'
    // },
    // {
    //   path: 'ideas',
    //   loadChildren: './features/ideas/ideas.module#IdeasModule'
    // },
    // {
    //   path: 'news',
    //   loadChildren: './features/news/news.module#NewsModule'
    // },
    {
        path: '',
        loadChildren: './features/common/common.module#CommonModule'
    },
    {
        path: '**',
        redirectTo: 'error',
    },
];
