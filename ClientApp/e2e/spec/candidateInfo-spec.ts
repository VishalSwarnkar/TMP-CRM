import { AppPage } from '../pageobject/app.po';
import {candidateinfo} from '../pageobject/pages/candidateview/candidateinfo.po';
import {data} from "../pageobject/pages/candidateview/data"

let page: AppPage;
beforeEach(() => {
  page = new AppPage();
  page.navigateTo();
});

describe('Verify Candidate View => Candidate info section', () => {
 
  it('should displayed all fields in Candidate Info section', () => {
    candidateinfo.verifyCandidateInfo();
  });

  it('should able to edit Candidate Info section', () => {
    candidateinfo.verifyCandidateInfo();
  });
});

describe('Verify Candidate Edit => Candidate info section', () => {
 
  it('should able to update Candidate Info section', () => {
     candidateinfo.updateCandidateInfo(data.candidateinfo);
     candidateinfo.verifyUpatedFields(data.candidateinfo);
 });



 