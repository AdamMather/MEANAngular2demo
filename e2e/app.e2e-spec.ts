import { HelloMeanPage } from './app.po';

describe('hello-mean App', function() {
  let page: HelloMeanPage;

  beforeEach(() => {
    page = new HelloMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Page 1');
  });
});
