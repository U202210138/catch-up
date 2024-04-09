import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsApiService {
  apiKey:string = 'd37ae4bf7ecb46a2bf7bc21c221e1703';
  baseUrl:string = 'https://newsapi.org/v2/';

  constructor(private http: HttpClient) {}
  getSources(){
    return this.http.get(`${this.baseUrl}//top-headlines/sources?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: string){
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles(){
    return this.getArticlesBySourceId('bbc-news');
  }

}
