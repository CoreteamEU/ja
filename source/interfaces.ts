export interface IPage {
  url: string;
  title: string;
}

export class Page implements IPage {
  url: string;
  title: string;
  constructor(url: string, title: string) {
    this.url = url;
    this.title = title;
  }
}
