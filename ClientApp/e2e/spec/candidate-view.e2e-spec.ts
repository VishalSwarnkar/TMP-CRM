import { CommonPageHelper } from '../pageobject/pages/common/common-page.helper';
import { Experience } from '../pageobject/pages/candidate_details/experience.po';
import { Education } from '../pageobject/pages/candidate_details/education.po';
import { LatestAddress } from '../pageobject/pages/candidate_details/latest_address.po';
import { Links } from '../pageobject/pages/candidate_details/links.po';

// 'use strict'; // necessary for es6 output in node

import { browser, element, by, ElementFinder } from 'protractor';

describe('App', () => {
  let experience: Experience;
  let education: Education;
  let latest_address: LatestAddress;
  let links: Links;
  let helper: CommonPageHelper;

  beforeEach(() => {
    experience = new Experience();
    education = new Education();
    latest_address = new LatestAddress();
    links = new Links();
    helper = new CommonPageHelper();
  });

  it('should display welcome message', () => {
    helper.navigateTo();
    expect(helper.getMainHeading()).toEqual('');
  });

});

describe('Candidate view', () => {
  let experience: Experience;
  let education: Education;
  let latest_address: LatestAddress;
  let links: Links;
  let helper: CommonPageHelper;

  beforeAll(() => browser.get(''));

  beforeEach(() => {
    experience = new Experience();
    education = new Education();
    latest_address = new LatestAddress();
    links = new Links();
    helper = new CommonPageHelper();
  });

  it('should display candidate current position', () => {
    expect(experience.getCandidatePositionText).toEqual('');
  });

  it('should display candidate experience history', () => {
    expect(experience.getCandidatePositionText).toEqual('');
  });
  
  it('should display candidate current address', () => {
    expect(latest_address.getCandidateAddressLine1).toEqual('');
    expect(latest_address.getCandidateAddressLine2).toEqual('');
    expect(latest_address.getCandidateCity).toEqual('');
    expect(latest_address.getCandidateState).toEqual('');
    expect(latest_address.getCandidateZip).toEqual('');
    expect(latest_address.getCandidateCountry).toEqual('');
  });

  it('should display candidate education history', () => {
    expect(education.getCandidateEducationText).toEqual('');
  });

});
