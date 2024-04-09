import { Source } from './source.entity';

export class article {
  description: string;
  url: string;
  urlToImage: string;
  source: Source;
  constructor() {
    this.description = '';
    this.url = '';
    this.urlToImage = '';
    this.source = new Source();
  }
}
