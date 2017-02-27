import { IterationTwoPage } from './app.po';

describe('iteration-two App', () => {
  let page: IterationTwoPage;

  beforeEach(() => {
    page = new IterationTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
