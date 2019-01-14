import { element, by, ElementFinder, promise } from 'protractor';
import { CommonPageHelper } from '../common/common-page.helper';

let common = new CommonPageHelper();

let editIcon = element(by.css(''));
let dropList = element(by.css(''));
let tickIcon = element(by.css(''));
let position = element(by.css(''));

export class Experience {

    getCandidatePositionText() {
        return common.getElementText(position);
    }

    selectCandidatePosition(text: string) {
        common.click(editIcon);
        common.selectDroplist(dropList, text);
        common.click(tickIcon);
    }

}