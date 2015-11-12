Accounts.onCreateUser(function(options, user) {
  _.extend(user, {
    name: options['profile']['name'],
    school: 'The School of Life',
    year: '2015',
    program: 'Engineering',
    about: 'I love CDE 2015!',
    points: 0
  });

  return user;
});

Meteor.users.allow({
  update: function(userId, doc, fieldNames, modifier) {
    var editableColumns = ["school", "year", "program", "about"];
    return doc._id == userId && editableColumns.indexOf(fieldNames[0]) != -1;
  }
});
