import { AppPage } from '../pageobject/app.po';
import { CandidateView } from '../pageobject/pages/candidateview/candidateview.po';

let data = require("../property/data");
let page: AppPage;
let candidateView: CandidateView;

beforeEach(() => {
  page = new AppPage();
  candidateView = new CandidateView();
  page.navigateTo();
});


describe('Verify Candidate Edit => Candidate info section', () => {
 
  it('should able to update Candidate Info section', () => {
     candidateView.setCandidateInfo(data.info);
     expect( candidateView.getText("firstName")).toEqual(data.firstName);
     expect( candidateView.getText("lastName")).toEqual(data.lastName);
     expect( candidateView.getText("currentPosition")).toEqual(data.currentPosition);
     expect( candidateView.getText("currentCompany")).toEqual(data.currentCompany);
     expect( candidateView.getText("location")).toEqual(data.location);
  });

  it('should able to update Communication section', () => {
    candidateView.setCandidateInfo(data.info);
    expect( candidateView.getText("mobileNumber")).toEqual(data.mobileNumber);
    expect( candidateView.getText("textNumber")).toEqual(data.textNumber);
    expect( candidateView.getText("email")).toEqual(data.email);
 });

});

   
