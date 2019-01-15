import { AppPage } from '../pageobject/app.po';
import {CandidateView} from '../pageobject/pages/candidateview/candidateview.po';
import {Communication} from '../pageobject/pages/candidateview/communication.po';
import {Data} from "../pageobject/pages/candidateview/data"

let page: AppPage;
let candidateView: CandidateView;
let data: Data;
let candidateInfoElement = {};
let communicationElement = {};

beforeEach(() => {
  page = new AppPage();
  candidateView = new CandidateView();
  candidateInfoElement = candidateView.getcandidateViewElements();
  communicationElement = Communication.getCommunicationElements();
  data = new Data();
  page.navigateTo();
});

describe('Verify Candidate View => Candidate info section', () => {
  
  it('should displayed all fields in Candidate Info section', () => {
    expect(candidateView.isPresent(candidateInfoElement.firstName)).toBeTruthy();
    expect(candidateView.isPresent(candidateInfoElement.lastName)).toBeTruthy();
    expect(candidateView.isPresent(candidateInfoElement.currentPosition)).toBeTruthy();
    expect(candidateView.isPresent(candidateInfoElement.currentCompany)).toBeTruthy();
    expect(candidateView.isPresent(candidateInfoElement.location)).toBeTruthy();
  });

  it('should displayed all fields in communication section', () => {
    expect( candidateView.getText(communicationElement.mobileNumber)).toEqual(data.mobileNumber);
    expect( candidateView.getText(communicationElement.textNumber)).toEqual(data.mobileNumber);
    expect( candidateView.getText(communicationElement.email)).toEqual(data.email);
  });
});



   
