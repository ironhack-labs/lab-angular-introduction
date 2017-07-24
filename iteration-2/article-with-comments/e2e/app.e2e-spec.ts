import { ArticleWithCommentsPage } from './app.po';

describe('article-with-comments App', () => {
  let page: ArticleWithCommentsPage;

  beforeEach(() => {
    page = new ArticleWithCommentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
