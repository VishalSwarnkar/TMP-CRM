import { browser, by, element, Key } from 'protractor';
let pagePath = "pageobject/pages";

var AppPage = (function () {
    return {
      
        navigateTo: function(pageName:string) {
            let url = "" || pageName;
            browser.get(url);
            return require('../${pagePath}/${pageName}/${pageName}')
        },
        
        getMainHeading: function() {
            return element(by.css('app-root h1')).getText();
        },
        
        selectNextKey:function() {
            browser.actions().sendKeys(Key.ARROW_RIGHT).perform();
        },
        
          selectPrevKey:function() {
            browser.actions().sendKeys(Key.ARROW_LEFT).perform();
        },
        
        selectEscapeKey:function() {
            browser.actions().sendKeys(Key.ESCAPE).perform();
        }
    }
  })();
