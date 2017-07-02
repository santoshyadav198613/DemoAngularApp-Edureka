import { DemoAngularAppEdurekaPage } from './app.po';

describe('demo-angular-app-edureka App', () => {
  let page: DemoAngularAppEdurekaPage;

  beforeEach(() => {
    page = new DemoAngularAppEdurekaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
