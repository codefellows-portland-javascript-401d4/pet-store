export default class HomePage {
  constructor() {

    const nav = element.all(by.css('button'));
    this.imgsButton = nav.get(2);

    this.uiView = element(by.css('ui-view'));

  }

  get() {
    return browser.get('/');

  }

  get title() {
    return browser.getTitle();

  }

  get url() {
    return browser.getLocationAbsUrl();

  }

  get stateComponent() {
    return this.uiView.all(by.css('*')).first().getTagName();

  }

  allImgs() {
    this.imgsButton.click();
  }
}