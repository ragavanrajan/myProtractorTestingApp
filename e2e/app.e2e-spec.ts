import { AppPage } from './app.po';

describe('my-protractor-testing-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title Angular 4 with Protractor ', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Angular 4 with Protractor');
  });
  it('should click three times and reset with matching points', () => {
    page.navigateTo();
    expect(page.getPoints()).toBe('1');
    // Instead of loop why we have written three time is to reduce the complexity and to see 
    // what is happening > to know what the test is actually doing
    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toBe('4');

    page.getResetButton().click();
    expect(page.getPoints()).toBe('0');

    // This is a more complex test > Testing all scenarios 
  });

});
