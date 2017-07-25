import { IterationThreePage } from './app.po';

describe('iteration-three App', () => {
  let page: IterationThreePage;

  beforeEach(() => {
    page = new IterationThreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
