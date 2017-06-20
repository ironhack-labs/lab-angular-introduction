import { AngularArtwithcommPage } from './app.po';

describe('angular-artwithcomm App', () => {
  let page: AngularArtwithcommPage;

  beforeEach(() => {
    page = new AngularArtwithcommPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
