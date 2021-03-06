/* global MenuHandler, describe, it, expect, should */

describe('MenuHandlerTest', () => {
  let menuHandler;

  beforeEach(() => {
      menuHandler = new MenuHandler();
  });

  it('exists', () => {
    expect(menuHandler).to.be.a('Object');
  });

  it('can add a new scene', () => {
      let div = document.createElement('div');
      menuHandler.addScene("Test", new Scene("Test", div, {'x': 0, 'y': 0, 'width': 100, 'height': 100}, "#FF00FF"));
      expect(menuHandler._scenes.size).to.equal(1);
  });

  it('can remove a scene', () => {
      let div = document.createElement('div');
      menuHandler.addScene("Test", new Scene("Test", div, {'x': 0, 'y': 0, 'width': 100, 'height': 100}, "#FF00FF"));
      expect(menuHandler._scenes.size).to.equal(1);
      menuHandler.removeScene("Test");
      expect(menuHandler._scenes.size).to.equal(0);
  });
  // Add more assertions here
});
