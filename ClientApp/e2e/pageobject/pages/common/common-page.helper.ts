import {browser,element,protractor,by, Key, ElementFinder, ExpectedConditions} from 'protractor';


export class CommonPageHelper {

  public navigateTo() {
    return browser.get('/');
  }

  public async getText(locator) {
    return element(locator).getText();
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

  public async isPresent(locator: ElementFinder){
    var myElement = element(locator);
    expect(myElement.isPresent());
  }

  public async sendKeys(locator: ElementFinder, value:string){
    var myElement = element(locator);
    myElement.sendKeys(value);
  }

  public async waitForElement(locator: ElementFinder, ms: number) {
    var myElement = element(locator);
    var until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(myElement), ms, 'Element taking too long to appear in the DOM');
  }





}
