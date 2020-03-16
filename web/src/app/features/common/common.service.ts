import { Injectable } from '@angular/core';
import * as fromActions from './common.actions';
import * as fromReducer from './common.reducer';
import * as fromSelectors from './common.selectors';
import { Store, select } from '@ngrx/store';
import { CommonKindType } from './common.config';
import { Observable } from 'rxjs';
import { ArticleContract } from 'src/app/webgets/article/article.contract';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    public store: Store<fromReducer.State>,
  ) { }
 
  initialise (): void{
    this.store.dispatch(fromActions.Initialise())
  }
 
  loadArticle (kind: CommonKindType): void{
    this.store.dispatch(fromActions.LoadArticle({ kind }))
  }
 
  LoadArticleSuccess (kind: CommonKindType, content: ArticleContract): void{
    this.store.dispatch(fromActions.LoadArticleSuccess({ kind, content }))
  }
 
  loadArticleFail (kind: CommonKindType, reason: string): void{
    this.store.dispatch(fromActions.LoadArticleFail({ kind, reason }))
  }
 
  editArticle (kind: CommonKindType): void{
    this.store.dispatch(fromActions.EditArticle({ kind }))
  }
 
  updateArticle (kind: CommonKindType, content: ArticleContract): void{
    this.store.dispatch(fromActions.UpdateArticle({ kind, content }))
  }
 
  updateArticleSuccess (kind: CommonKindType): void{
    this.store.dispatch(fromActions.UpdateArticleSuccess({ kind }))
  }
 
  updateArticleFail (kind: CommonKindType, reason: string): void{
    this.store.dispatch(fromActions.UpdateArticleFail({ kind, reason }))
  }
 
  state (): Observable<fromReducer.State>{
    return this.store.pipe(
      select(fromSelectors.state),
    )
  }

  article (kind: CommonKindType): Observable<ArticleContract>{
    return this.store.pipe(
      select(fromSelectors.article(), { kind }),
    )
  }

  about (): Observable<ArticleContract>{
    return this.article('about')
  }

  contact (): Observable<ArticleContract>{
    return this.article('contact')
  }

  terms (): Observable<ArticleContract>{
    return this.article('terms')
  }

}
