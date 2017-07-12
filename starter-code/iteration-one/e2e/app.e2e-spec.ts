import { IterationOnePage } from './app.po';

describe('iteration-one App', () => {
  let page: IterationOnePage;

  beforeEach(() => {
    page = new IterationOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
