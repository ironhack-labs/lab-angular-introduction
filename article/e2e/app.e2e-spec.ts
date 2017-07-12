import { ArticlePage } from './app.po';

describe('article App', () => {
  let page: ArticlePage;

  beforeEach(() => {
    page = new ArticlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
