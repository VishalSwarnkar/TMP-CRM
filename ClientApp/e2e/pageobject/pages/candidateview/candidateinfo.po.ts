import { helper } from '../common/common-page.helper';
import {locator} from "./locator"

export.class CandidateInfo {

     verifyCandidateInfo(){
     helper.isPresent(locator.firstName);
     helper.isPresent(locator.lastName);
     helper.isPresent(locator.currentPosition);
     helper.isPresent(locator.currentCompany);
     helper.isPresent(locator.location);
    }

     updateCandidateInfo(data){
         helper.sendKeys(locator.editFirstName, data.firstName);
         helper.sendKeys(locator.editLastName, data.lastName);
         helper.sendKeys(locator.editCurrentPosition, data.currentPosition);
         helper.sendKeys(locator.editCurrentCompany, data.currentCompany)
         helper.sendKeys(locator.editLocation, data.location);
         helper.click(locator.checkicon);
         helper.waitForElement(locator.firstName, 500);
         
     }
     
     verifyUpatedFields(data){
         expect( helper.getText(locator.firstName)).toEqual(data.firstName);
         expect( helper.getText(locator.lastName)).toEqual(data.lastName);
         expect( helper.getText(locator.currentPosition)).toEqual(data.currentPosition);
         expect( helper.getText(locator.currentCompany)).toEqual(data.currentCompany);
         expect( helper.getText(locator.location)).toEqual(data.location);
     }

}
