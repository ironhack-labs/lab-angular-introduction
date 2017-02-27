import { It2Page } from './app.po';

describe('it2 App', () => {
  let page: It2Page;

  beforeEach(() => {
    page = new It2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
