describe ('userService', () => {

  let userService = null;
  let $httpBackend = null;

  const TOKEN_NAME = 'petStoreToken';

  beforeEach(angular.mock.module('services', { apiUrl: '/api' }));

  beforeEach(angular.mock.inject(function(_userService_, _$httpBackend_) {
    userService = _userService_;
    $httpBackend = _$httpBackend_;
  }));

  it ('isAuthenticated if we have a token', () => {
    localStorage.setItem(TOKEN_NAME, '1');
    expect(userService.isAuthenticated()).to.be.ok;
  });

  it ('not isAuthenticated if we don\'t have a token', () => {
    localStorage.removeItem(TOKEN_NAME);
    expect(userService.isAuthenticated()).to.not.be.ok;
  });

  it ('logs user out, i.e. removes token', () => {
    localStorage.setItem(TOKEN_NAME, '1');
    expect(userService.isAuthenticated()).to.be.ok;
    userService.logout();
    expect(userService.isAuthenticated()).to.not.be.ok;
  });

  it ('sets a valid token when user provides valid credentials', (done) => {
    localStorage.removeItem(TOKEN_NAME);
    const credentials = { username: 'testuser', password: 'testpassword' };
    $httpBackend
      .expectPOST('/api/auth/signin', credentials)
      .respond('1');

    userService.signin(credentials)
      .then(() => {
        expect(userService.isAuthenticated()).to.be.ok;
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('does not set a valid token when user provides invalid credentials', (done) => {
    localStorage.removeItem(TOKEN_NAME);
    const credentials = { username: 'baduser', password: 'badpassword' };
    $httpBackend
      .expectPOST('/api/auth/signin', credentials)
      .respond(() => { return [ 401, 'Not authorized' ]; });

    userService.signin(credentials)
      .then(() => {
        expect(userService.isAuthenticated()).to.be.ok;
        done();
      })
      .catch((err) => { // eslint-disable-line no-unused-vars
        expect(userService.isAuthenticated()).to.not.be.ok;
        done();
      });

    $httpBackend.flush();
  });

  it ('sets a valid token when the user signs up with valid credentials', (done) => {
    localStorage.removeItem(TOKEN_NAME);
    const credentials = { email: 'name@email.com', username: 'testuser', password: 'testpassword' };
    $httpBackend
      .expectPOST('/api/auth/signup', credentials)
      .respond('1');

    userService.signup(credentials)
      .then(() => {
        expect(userService.isAuthenticated()).to.be.ok;
        done();
      })
      .catch(done);

    $httpBackend.flush();    
  });

  it ('does not set a valid token when the user does not sign up with valid credentials', (done) => {
    localStorage.removeItem(TOKEN_NAME);
    const credentials = { username: 'baduser', password: 'badpassword' };
    $httpBackend
      .expectPOST('/api/auth/signup', credentials)
      .respond(() => { return [ 401, 'Not authorized' ]; });

    userService.signup(credentials)
      .then(() => {
        expect(userService.isAuthenticated()).to.be.ok;
        done();
      })
      .catch((err) => { // eslint-disable-line no-unused-vars
        expect(userService.isAuthenticated()).to.not.be.ok;
        done();
      });

    $httpBackend.flush();
  });

});