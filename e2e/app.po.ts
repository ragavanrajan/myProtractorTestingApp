import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  // Think in the user view > how can I get in to the span 
  // which elements are the variable 
  getPoints() {
    return element(by.cssContainingText('div', 'Points')).$('span').getText();
  }
  // To get the buttons
  getPlus1Button() {
    return element(by.cssContainingText('button', 'Plus 1'));
  }

  // To get the Reset buttons
  getResetButton() {
    return element(by.cssContainingText('button', 'Reset'));
  }

}
