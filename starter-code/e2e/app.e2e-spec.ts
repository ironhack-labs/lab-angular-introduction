import { LabAngularIntroduction1Page } from './app.po';

describe('lab-angular-introduction1 App', () => {
  let page: LabAngularIntroduction1Page;

  beforeEach(() => {
    page = new LabAngularIntroduction1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
