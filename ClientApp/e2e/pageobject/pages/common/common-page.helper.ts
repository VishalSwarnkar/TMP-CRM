import {browser, by, element, Key, ElementFinder, ExpectedConditions} from 'protractor';

export class CommonPageHelper {

  public navigateTo() {
    return browser.get('/');
  }

  public async getMainHeading() {
    return element(by.css('app-root h1')).getText();
  }

  public async selectNextKey() {
    return browser.actions().sendKeys(Key.ARROW_RIGHT).perform();
  }

  public async selectPrevKey() {
    return browser.actions().sendKeys(Key.ARROW_LEFT).perform();
  }

  public async selectEscapeKey() {
    return browser.actions().sendKeys(Key.ESCAPE).perform();
  }

 protected async goTo(url: string) {
      browser.waitForAngularEnabled(false);
      return browser.get(url);
  }

  public async click(item: ElementFinder) {
     browser.wait(ExpectedConditions.elementToBeClickable(item));
     return item.click();
  }

  public async sendKeys(item: ElementFinder, data: string) {
     browser.wait(ExpectedConditions.visibilityOf (item));
     return item.sendKeys(data);
  }

  public async selectDroplist(item: ElementFinder, data: string) {
    browser.wait(ExpectedConditions.visibilityOf (item));
    //logic here
 }

 public async getElementText(item: ElementFinder) {
   return item.getText();
 }

}
