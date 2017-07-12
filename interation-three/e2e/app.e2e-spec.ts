import { InterationThreePage } from './app.po';

describe('interation-three App', () => {
  let page: InterationThreePage;

  beforeEach(() => {
    page = new InterationThreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
