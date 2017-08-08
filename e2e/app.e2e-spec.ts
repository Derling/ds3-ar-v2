import { Ds3ArV2Page } from './app.po';

describe('ds3-ar-v2 App', () => {
  let page: Ds3ArV2Page;

  beforeEach(() => {
    page = new Ds3ArV2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
