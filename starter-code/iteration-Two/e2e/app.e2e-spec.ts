import { IterationTwoPage } from './app.po';

describe('iteration-two App', () => {
  let page: IterationTwoPage;

  beforeEach(() => {
    page = new IterationTwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
