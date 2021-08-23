exports.seed = function(knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          {username: 'User', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'Bob', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'Roy', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111

        ]);
      });
  };