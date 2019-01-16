import { helper } from '../common/common-page.helper';
import {locator} from "./locator"

export class CandidateInfo {
    isPresent(elementName:string){
     helper.isPresent(locator.details[elementName]);
    }

   getText(elementName:string){
      return helper.getText(locator.details[elementName]);
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
