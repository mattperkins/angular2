import { ProfjspPage } from './app.po';

describe('profjsp App', function() {
  let page: ProfjspPage;

  beforeEach(() => {
    page = new ProfjspPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
