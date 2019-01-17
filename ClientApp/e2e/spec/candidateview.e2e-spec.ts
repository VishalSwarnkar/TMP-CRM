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

describe('Verify Candidate View fields are displayed properly', () => {
 
  it('should displayed all fields in candidate Info section', () => {
    expect(candidateView.isPresent("firstName")).toBeTruthy();
    expect(candidateView.isPresent("lastName")).toBeTruthy();
    expect(candidateView.isPresent("currentPosition")).toBeTruthy();
    expect(candidateView.isPresent("currentCompany")).toBeTruthy();
    expect(candidateView.isPresent("location")).toBeTruthy();
  });

  it('should displayed all fields in communication section', () => {
    expect( candidateView.getText("mobileNumber")).toEqual(data.mobileNumber);
    expect( candidateView.getText("textNumber")).toEqual(data.mobileNumber);
    expect( candidateView.getText("email")).toEqual(data.email);
  });

  it('should display candidate current position', () => {
    expect(candidateView.isPresent("candidatePosition")).toBeTruthy();
  });

  it('should display candidate experience history', () => {
    expect(candidateView.isPresent("candidateExperience")).toBeTruthy();
  });
  
  it('should display candidate current address', () => {
    expect(candidateView.isPresent("addressLine1")).toBeTruthy();
    expect(candidateView.isPresent("addressLine2")).toBeTruthy();
    expect(candidateView.isPresent("city")).toBeTruthy();
    expect(candidateView.isPresent("state")).toBeTruthy();
    expect(candidateView.isPresent("zip")).toBeTruthy();
    expect(candidateView.isPresent("country")).toBeTruthy();
  });

  it('should display candidate education history', () => {
    expect(candidateView.isPresent("candidateEducation")).toBeTruthy();
  });

});



   
