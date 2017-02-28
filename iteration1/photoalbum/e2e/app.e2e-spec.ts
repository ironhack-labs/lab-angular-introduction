import { PhotoalbumPage } from './app.po';

describe('photoalbum App', function() {
  let page: PhotoalbumPage;

  beforeEach(() => {
    page = new PhotoalbumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
