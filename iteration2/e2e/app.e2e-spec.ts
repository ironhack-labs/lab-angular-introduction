import { Iteration2Page } from './app.po';

describe('iteration2 App', () => {
  let page: Iteration2Page;

  beforeEach(() => {
    page = new Iteration2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
