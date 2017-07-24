import { PhotoAlbumPage } from './app.po';

describe('photo-album App', () => {
  let page: PhotoAlbumPage;

  beforeEach(() => {
    page = new PhotoAlbumPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
