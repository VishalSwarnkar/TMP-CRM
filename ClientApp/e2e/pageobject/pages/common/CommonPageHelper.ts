import {browser, by, element, Key, ElementFinder, ExpectedConditions} from 'protractor';

let item;

export class CommonPageHelper {
  locator:Object;

  constructor(locator:any){
    this.locator=locator;
  };
  
  public async getText(elementName:string) {
   return element(this.locator).getText();
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

  public async click(elementName:string) {
     item = element(this.locator[elementName]);
     browser.wait(ExpectedConditions.elementToBeClickable(item));
     return item.click();
  }

  public async sendKeys(item: ElementFinder, data: string) {
    browser.wait(ExpectedConditions.visibilityOf (item));
    return item.sendKeys(data);
  }

  public async selectDroplist(item: ElementFinder, data: string) {
    browser.wait(ExpectedConditions.visibilityOf (item));
 }

  public async isPresent(elementName: string){
    return this.locator[elementName].isPresent();
  }
  public async waitForElement(element: ElementFinder, ms: number = 5000) {
    browser.wait(ExpectedConditions.presenceOf(element), ms, 'Element taking too long to appear in the DOM')
  }
}
