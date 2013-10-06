exports.appname = 'Test App';
exports.url = 'http://localhost:3000';
exports.port = 3000; // Todo: use port instead full url

// show debugging statements in console
exports.debug = false;

// signup settings
exports.signupRoute = '/signup';
exports.forgotPasswordRoute = '/forgot-password';

// email settings
exports.emailType = 'Stub';
exports.emailSettings = {
  service: 'none',
  auth: {
    user: 'none',
    pass: 'none'
  }
};

// email signup template
exports.emailSignup = {
  subject: 'Welcome to <%- appname %>',
  title: 'Welcome to <%- appname %>',
  text: [
    '<h2>Hello <%- username %></h2>',
    'This is awesome',
    '<p>You should come and see this</p>',
    '<%- link %> to finish registration'
  ].join(''),
  linkText: 'Click here'
};

// signup process -> email already taken
exports.emailSignupTaken = {
  subject: 'Email already registered',
  title: 'Email already registered',
  text: [
    '<h2>Hello</h2>',
    'you or someone else tried to sign up for <%- appname %>.',
    'Your email is already registered and you cannot sign up twice.',
    'If you haven\'t tried to sign up, please ignore this email. Everything is fine.',
    '<p>The <%- appname %> Team</p>'
  ].join('')
};

// signup process -> resend email with verification link
exports.emailResendVerification = {
  subject: 'Complete your registration at <%- appname %>',
  title: 'Complete your registration at <%- appname %>',
  text: [
    '<h2>Hello <%- username %></h2>',
    'here is the link again. <%- link %> to complete your registration for <%- appname %>.',
    '<p>The <%- appname %> Team</p>'
  ].join(''),
  linkText: 'Click here'
};

// forgot password
exports.emailForgotPassword = {
  subject: 'Reset your password',
  title: 'Reset your password',
  text: [
    '<h2>Hey <%- username %></h2>',
    '<%- link %> to reset your password.',
    '<p>The <%- appname %> Team</p>'
  ].join(''),
  linkText: 'Click here'
};