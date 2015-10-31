Accounts.onCreateUser(function(options, user) {
  _.extend(user, {
    name: 'Kevin James',
    school: 'Waterloo',
    year: '2017',
    program: 'Software Engineering',
    about: 'I am a person.'
  });

  return user;
});
