import { InterationTwoPage } from './app.po';

describe('interation-two App', () => {
  let page: InterationTwoPage;

  beforeEach(() => {
    page = new InterationTwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
