import { CommonPageHelper } from '../common/CommonPageHelper';

let locator = require("../property/locator");

export class CandidateView extends CommonPageHelper {
   constructor() {
      super(locator);
    }

    setCandidateInfo(data){
         this.sendKeys(locator.editFirstName, data.firstName);
         this.sendKeys(locator.editLastName, data.lastName);
         this.sendKeys(locator.editCurrentPosition, data.currentPosition);
         this.sendKeys(locator.editCurrentCompany, data.currentCompany)
         this.sendKeys(locator.editLocation, data.location);
         this.click(locator.checkicon);
         this.waitForElement(locator.firstName, 500);
    }

//     isElementPresent(elementName:string){
//        return this.isPresent(locator.details[elementName]);
//     }

//    getText(elementName:string){
//       return this.getText(locator.details[elementName]);
//     }
};
