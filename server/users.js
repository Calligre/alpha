Accounts.onCreateUser(function(options, user) {
  _.extend(user, {
    name: options['profile']['name'],
    school: '',
    year: '',
    program: '',
    about: '',
    points: 0
  });

  return user;
});

Meteor.users.allow({
  update: function(userId, doc, fieldNames, modifier) {
    var editableColumns = ['school', 'year', 'program', 'about', 'services'];
    return doc._id == userId && editableColumns.indexOf(fieldNames[0]) != -1;
  }
});
