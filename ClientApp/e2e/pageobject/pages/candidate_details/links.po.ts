import { element, by, ElementFinder, promise } from 'protractor';
import {CommonPageHelper} from '../common/common-page.helper';

let common = new CommonPageHelper();
let editIcon = element(by.css(''));
let tickIcon = element(by.css(''));
let uploadButton = element(by.css(''));
let addNewButton = element(by.css(''));


export class Links {

    uploadCandidateResume(){
        common.click(editIcon);

        /*
            Upload logic here
        */

        common.click(uploadButton);
        common.click(tickIcon);
    }

}