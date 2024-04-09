import { Source } from './source.entity';

export class article {
  tittle: string;
  description: string;
  url: string;
  urlToImage: string;
  source: Source;
  constructor() {
    this.tittle = '';
    this.description = '';
    this.url = '';
    this.urlToImage = '';
    this.source = new Source();
  }
}
