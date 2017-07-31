import { NgRouterPage } from './app.po';

describe('ng-router App', function() {
  let page: NgRouterPage;

  beforeEach(() => {
    page = new NgRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
