import { createAction, props } from '@ngrx/store';
import { CommonKindType } from './common.config';
import { ArticleContract } from 'src/app/webgets/article/article.contract';

export const Initialise = createAction(
  '[Common][Article] Initialise',
);

export const LoadArticle = createAction(
  '[Common][Article] Load',
  props<{ kind: CommonKindType }>()
);

export const LoadArticleSuccess = createAction(
  '[Common][Article] Load Success',
  props<{ kind: CommonKindType, content: ArticleContract }>()
);

export const LoadArticleFail = createAction(
  '[Common][Article] Load Fail',
  props<{ kind: CommonKindType, reason: string }>()
);

export const EditArticle = createAction(
  '[Common][Article] Edit',
  props<{ kind: CommonKindType }>()
);

export const UpdateArticle = createAction(
  '[Common][Article] Update',
  props<{ kind: CommonKindType, content: ArticleContract }>()
);

export const UpdateArticleSuccess = createAction(
  '[Common][Article] Update Success',
  props<{ kind: CommonKindType }>()
);

export const UpdateArticleFail = createAction(
  '[Common][Article] Update Fail',
  props<{ kind: CommonKindType, reason: string }>()
);
