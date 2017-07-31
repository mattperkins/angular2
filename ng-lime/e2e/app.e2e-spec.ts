import { NgLimePage } from './app.po';

describe('ng-lime App', function() {
  let page: NgLimePage;

  beforeEach(() => {
    page = new NgLimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
