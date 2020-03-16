import { ArticleComponent } from 'src/app/webgets/article/article.component';
import { ArticleContract } from 'src/app/webgets/article/article.contract';

export type CommonKindType = 'about' | 'contact' | 'terms'
export interface CommonConfigContract {
    about: ArticleContract,
    contact: ArticleContract,
    terms: ArticleContract,
    kind: CommonKindType,
}

export const COMMON_CONFIG: CommonConfigContract = {
    about: null,
    contact: null,
    terms: null,
    kind: 'about',
}
