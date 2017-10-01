import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('app-root h1')).getText();
  }

  getPoints() {
    return element(by.cssContainingText('div', 'Points')).$('span').getText();
  }

  getPlus1Button() {
    return element(by.id('plusOneButton'));
  }

  getMinus1Button() {
    return element(by.id('minusOneButton'));
  }

  getResetButton() {
    return element(by.id('resetButton'));
  }
}
