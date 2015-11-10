Accounts.onCreateUser(function(options, user) {
  _.extend(user, {
    name: options['profile']['name'],
    school: 'The School of Life',
    year: '2015',
    program: 'Engineering',
    about: 'I love CDE 2015!',
    points: 42
  });

  return user;
});
