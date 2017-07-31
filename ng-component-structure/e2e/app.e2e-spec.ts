import { NgAppRigPage } from './app.po';

describe('ng-app-rig App', function() {
  let page: NgAppRigPage;

  beforeEach(() => {
    page = new NgAppRigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
