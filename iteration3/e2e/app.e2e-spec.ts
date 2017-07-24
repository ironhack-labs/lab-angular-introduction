import { Iteration3Page } from './app.po';

describe('iteration3 App', () => {
  let page: Iteration3Page;

  beforeEach(() => {
    page = new Iteration3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
