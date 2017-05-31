import { HelloAngularFabricPage } from './app.po';

describe('hello-angular-fabric App', () => {
  let page: HelloAngularFabricPage;

  beforeEach(() => {
    page = new HelloAngularFabricPage();
  });

  it(`should display message saying 'Hello Angular Fabric!'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello Angular Fabric!');
  });
});
