import { CursoWebAngularPage } from './app.po';

describe('curso-web-angular App', () => {
  let page: CursoWebAngularPage;

  beforeEach(() => {
    page = new CursoWebAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cwa!!');
  });
});
