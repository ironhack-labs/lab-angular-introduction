import { Iteration1Page } from './app.po';

describe('iteration1 App', () => {
  let page: Iteration1Page;

  beforeEach(() => {
    page = new Iteration1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
