import { element, by, ElementFinder, promise } from 'protractor';
import { CommonPageHelper } from '../common/common-page.helper';

let common = new CommonPageHelper();
let editIcon = element(by.css(''));
let dropList = element(by.css(''));
let tickIcon = element(by.css(''));
let education = element(by.css(''));

export class Education {

  getCandidateEducationText() {
    return common.getElementText(education);
  }

  selectCandidateEducation(text: string) {
    common.click(editIcon);
    common.selectDroplist(dropList, text);
    common.click(tickIcon);
  }

}