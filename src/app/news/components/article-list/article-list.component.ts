import {Component, Input, input} from '@angular/core';
import {article} from "../../model/article.entity";
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  tittle = 'CatchUp';

  @Input() articles: Array<article>=[];
}
