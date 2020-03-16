import { Component, OnInit, Input } from '@angular/core';
import { ArticleContract } from './article.contract';

@Component({
  selector: 'wg-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: ArticleContract

  constructor() { }

  ngOnInit() {
    console.log({ a: this.article})
  }

}
