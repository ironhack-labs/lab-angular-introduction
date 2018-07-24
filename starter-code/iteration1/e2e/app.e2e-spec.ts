import { LabAngularIntroductionPage } from './app.po';


describe('lab-angular-introduction App', function() {
  let page: LabAngularIntroductionPage;

  beforeEach(() => {
    page = new LabAngularIntroductionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
