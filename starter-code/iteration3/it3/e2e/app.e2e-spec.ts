import { It3Page } from './app.po';

describe('it3 App', () => {
  let page: It3Page;

  beforeEach(() => {
    page = new It3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
