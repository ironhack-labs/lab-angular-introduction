import { NbachampPage } from './app.po';

describe('nbachamp App', () => {
  let page: NbachampPage;

  beforeEach(() => {
    page = new NbachampPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
