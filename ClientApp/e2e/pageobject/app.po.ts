import { browser, by, element, Key } from 'protractor';
let pagePath = "pageobject/pages";

export class AppPage {
  navigateTo(pageName:string) {
     browser.get('/${pagePath}'+pageName);
     return require('../../'+pageName)
  }

  getMainHeading() {
    return element(by.css('app-root h1')).getText();
  }

  selectNextKey() {
    browser.actions().sendKeys(Key.ARROW_RIGHT).perform();
  }

  selectPrevKey() {
    browser.actions().sendKeys(Key.ARROW_LEFT).perform();
  }

  selectEscapeKey() {
    browser.actions().sendKeys(Key.ESCAPE).perform();
  }
}
