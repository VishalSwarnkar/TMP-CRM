import { element, by, ElementFinder, promise } from 'protractor';
import {CommonPageHelper} from '../common/common-page.helper';

let common = new CommonPageHelper();
let editIcon = element(by.css(''));
let tickIcon = element(by.css(''));
let address_line1 = element(by.css(''));
let address_line2 = element(by.css(''));
let city = element(by.css(''));
let state = element(by.css(''));
let zip = element(by.css(''));
let country = element(by.css(''));


export class LatestAddress {
    
    getCandidateAddressLine1(){
        common.getElementText(address_line1);
    }
    
    getCandidateAddressLine2(){
        common.getElementText(address_line2);
    }
    
    getCandidateCity(){
        common.getElementText(city);
    }
    
    getCandidateState(){
        common.getElementText(state);
    }
    
    getCandidateZip(){
        common.getElementText(zip);
    }
    
    getCandidateCountry(){
        common.getElementText(country);
    }

    editCandidateAddress(data){
        common.click(editIcon);
        common.sendKeys(address_line1, data.address_line1);
        common.sendKeys(address_line2, data.address_line2);
        common.sendKeys(city, data.city);
        common.selectDroplist(state, data.state);
        common.sendKeys(zip, data.zip);
        common.sendKeys(country, data.country);
        common.click(tickIcon);
    }

}
