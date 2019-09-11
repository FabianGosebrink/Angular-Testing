import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTextField() {
    return element(by.css('input'));
  }

  getButton() {
    return element(by.css('button'));
  }

  getTodoItemButton() {
    return element(by.id('doneButton'));
  }

  getListCount() {
    return element.all(by.css('ul li')).count();
  }

  getList() {
    return element.all(by.css('ul li'));
  }

  getInactiveElements() {
    return element.all(by.css('.inactive'));
  }
}
