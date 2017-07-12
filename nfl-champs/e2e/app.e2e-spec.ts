import { NflChampsPage } from './app.po';

describe('nfl-champs App', () => {
  let page: NflChampsPage;

  beforeEach(() => {
    page = new NflChampsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
