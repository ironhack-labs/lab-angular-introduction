import { It1Page } from './app.po';

describe('it1 App', () => {
  let page: It1Page;

  beforeEach(() => {
    page = new It1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
