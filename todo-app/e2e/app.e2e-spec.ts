import { element } from 'protractor';

import { AppPage } from './app.po';

describe('todo-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should add Todo in List', () => {
    page.navigateTo();
    expect(page.getListCount()).toBe(0);
    page.getTextField().clear();
    page.getTextField().sendKeys('exampleTodo');
    page.getButton().click();
    expect(page.getListCount()).toBe(1);
  });

  it('should add correct css class when marked as done', () => {
    page.navigateTo();
    page.getTextField().clear();
    page.getTextField().sendKeys('exampleTodo');
    page.getButton().click();
    page.getTodoItemButton().click();
    expect(page.getInactiveElements().count()).toBe(1);
  });
});
