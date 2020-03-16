import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleContract } from 'src/app/webgets/article/article.contract';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact$: Observable<ArticleContract>

  constructor(
    private commonService: CommonService
  ) {
    this.contact$ = this.commonService.contact()
    this.commonService.loadArticle('contact')
  }

  ngOnInit() {
  }

}
