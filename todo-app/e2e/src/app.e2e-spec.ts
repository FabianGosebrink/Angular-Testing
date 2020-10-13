import * as fs from 'fs';
import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to todo-app!');
  });

  it('should add Todo in List', () => {
    page.navigateTo();
    expect(page.getListCount()).toBe(0);
    page.getTextField().clear();
    page.getTextField().sendKeys('exampleTodo');

    browser.takeScreenshot().then((png) => {
      const stream = fs.createWriteStream(`screenshot-1.png`);
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });

    page.getButton().click();

    browser.takeScreenshot().then((png) => {
      const stream = fs.createWriteStream('screenshot-2.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });

    expect(page.getListCount()).toBe(1);
  });

  it('should add correct css class when marked as done', () => {
    page.navigateTo();
    page.getTextField().clear();
    page.getTextField().sendKeys('exampleTodo');

    browser.takeScreenshot().then((png) => {
      const stream = fs.createWriteStream('screenshot-3.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });

    page.getButton().click();
    page.getTodoItemButton().click();

    browser.takeScreenshot().then((png) => {
      const stream = fs.createWriteStream('screenshot-4.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });

    expect(page.getInactiveElements().count()).toBe(1);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
