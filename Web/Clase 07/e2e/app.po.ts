import { browser, by, element } from 'protractor';

export class CursoWebAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cwa-root h1')).getText();
  }
}
