import { IterationOnePage } from './app.po';

describe('iteration-one App', function() {
  let page: IterationOnePage;

  beforeEach(() => {
    page = new IterationOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
