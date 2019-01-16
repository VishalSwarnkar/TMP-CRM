import { helper } from '../common/common-page.helper';
import {locator} from "./locator"

export class CandidateInfo {
    isPresent(element){
       return helper.isPresent(element);
    }

    getCandidateInfoElements(){
       return locator.info;       
    }

    getCommunicationElements(){
      return locator.communication();       
   }

    getText(element){
      return helper.getText(element);
    }

    setCandidateInfo(data){
         helper.sendKeys(locator.editFirstName, data.firstName);
         helper.sendKeys(locator.editLastName, data.lastName);
         helper.sendKeys(locator.editCurrentPosition, data.currentPosition);
         helper.sendKeys(locator.editCurrentCompany, data.currentCompany)
         helper.sendKeys(locator.editLocation, data.location);
         helper.click(locator.checkicon);
         helper.waitForElement(locator.firstName, 500);
    }
}
