import { AppPage } from './app.po';

describe('angularworkshop App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should display Letslearn title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Welcome to app!');
  });

  it('Should start with 1 point', () => {
    page.navigateTo();
    expect(page.getPoints()).toEqual('1');
  });

  it('Should increase points by clicking plus1', () => {
    page.navigateTo();

    expect(page.getPoints()).toEqual('1');
    page.getPlus1Button().click();

    expect(page.getPoints()).toEqual('2');

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toEqual('5');
  });

  it('Should decrease points by clicking minus1', () => {
    page.navigateTo();

    expect(page.getPoints()).toEqual('1');
    page.getPlus1Button().click();

    expect(page.getPoints()).toEqual('2');

    page.getMinus1Button().click();
    page.getMinus1Button().click();

    expect(page.getPoints()).toEqual('0');
  });

  it('Should restet points by clicking reset', () => {
    page.navigateTo();

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toEqual('4');

    page.getResetButton().click();

    expect(page.getPoints()).toEqual('0');
  });
});
