describe ('tokenService', () => {

  const { expect } = chai;
  var tokenService;

  const TOKEN_NAME = 'petStoreToken';

  beforeEach(angular.mock.module('services'));

  beforeEach(angular.mock.inject(function(_tokenService_) {
    tokenService = _tokenService_;
  }));

  localStorage.removeItem(TOKEN_NAME);

  it ('stores a token in localStorage', () => {
    tokenService.set('myToken');
    const retrieved = localStorage.getItem(TOKEN_NAME);
    expect(retrieved).to.equal('myToken');
  });

  it ('gets a token from localStorage', () => {
    localStorage.setItem(TOKEN_NAME, 'myChangedToken');
    const retrieved = tokenService.get();
    expect(retrieved).to.equal('myChangedToken');
  });

  it ('removes the token from localStorage', () => {
    tokenService.remove();
    const retrieved = localStorage.getItem(TOKEN_NAME);
    expect(retrieved).to.not.be.ok;
  });

});