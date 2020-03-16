import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';
import { ArticleContract } from 'src/app/webgets/article/article.contract';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about$: Observable<ArticleContract>

  constructor(
    private commonService: CommonService
  ) {
    this.about$ = this.commonService.about()
    this.commonService.loadArticle('about')
  }

  ngOnInit() { }

}
