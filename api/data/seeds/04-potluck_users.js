
exports.seed = function(knex) {
    return knex('potluck_users').del()
      .then(function () {
        return knex('potluck_users').insert([
          {
            potluck_id: '2',
            user_id: '3',
            attending: '1'
          },
          {
            potluck_id: '1',
            user_id: '2',
            attending: '0'
          },
          {
            potluck_id: '1',
            user_id: '1',
            attending: '1'
          },
          {
            potluck_id: '2',
            user_id: '3',
            attending: '0'
          },
          {
            potluck_id: '3',
            user_id: '1',
            attending: '1'
          },
        ]);
      });
  };