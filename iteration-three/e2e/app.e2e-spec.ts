import { IterationThreePage } from './app.po';

describe('iteration-three App', function() {
  let page: IterationThreePage;

  beforeEach(() => {
    page = new IterationThreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
