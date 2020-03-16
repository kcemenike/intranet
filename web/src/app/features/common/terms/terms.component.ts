import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleContract } from 'src/app/webgets/article/article.contract';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  terms$: Observable<ArticleContract>

  constructor(
    private commonService: CommonService
  ) {
    this.terms$ = this.commonService.terms()
    this.commonService.loadArticle('terms')
  }

  ngOnInit() { }

}
