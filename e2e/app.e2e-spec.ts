import { EtreedbOrgPage } from './app.po';

describe('etreedb-org App', function() {
  let page: EtreedbOrgPage;

  beforeEach(() => {
    page = new EtreedbOrgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
