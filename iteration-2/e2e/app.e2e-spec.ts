import { IterationPage } from './app.po';

describe('iteration App', () => {
  let page: IterationPage;

  beforeEach(() => {
    page = new IterationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
