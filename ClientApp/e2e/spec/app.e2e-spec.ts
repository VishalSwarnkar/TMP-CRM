import { AppPage } from '../pageobject/app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getMainHeading()).toEqual('This is Testing');
 });

 it('should compare screen', () => {
  expect(page.compareScreen()).toEqual(0);
});
});
