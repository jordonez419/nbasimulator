exports.seed = async function (knex) {
  // await knex('users').truncate()
  // await knex('roles').truncate()
  // await knex('roles').insert([
  //   { role_name: 'admin' },
  //   { role_name: 'student' },
  //   { role_name: 'instructor' },
  // ])
  await knex('players').insert([
    {
      player_name: 'Lebron James',
      position: 'Small Forward',
      height: '6 foot 8',
      ppg: 24.8,
      apg: 7.0,
      rpg: 5.5,
      rating: 96
    },
    {
      player_name: 'Giannis Antetokounmpo',
      position: 'Small Forward',
      height: '6 foot 11',
      ppg: 27.6,
      apg: 5.8,
      rpg: 11.5,
      rating: 96
    },
    {
      player_name: 'Stephen Curry',
      position: 'Point Guard',
      height: '6 foot 2',
      ppg: 27.6,
      apg: 6.6,
      rpg: 6.6,
      rating: 96
    },
    {
      player_name: 'Luka Doncic',
      position: 'Point Guard',
      height: '6 foot 7',
      ppg: 24.9,
      apg: 6.7,
      rpg: 8.0,
      rating: 94
    },
    {
      player_name: 'Nikola Jokic',
      position: 'Center',
      height: '6 foot 11',
      ppg: 25.4,
      apg: 5.7,
      rpg: 13.6,
      rating: 95
    },
    {
      player_name: 'Jaylen Brown',
      position: 'Shooting Guard',
      height: '6 foot 6',
      ppg: 25.6,
      apg: 2.5,
      rpg: 6.1,
      rating: 95
    },
    {
      player_name: 'Rudy Gobert',
      position: 'Center',
      height: '6 foot 11',
      ppg: 14.6,
      apg: 1.0,
      rpg: 15.9,
      rating: 88
    },
    {
      player_name: 'Damian Lillard',
      position: 'Point Guard',
      height: '6 foot 2',
      ppg: 19.3,
      apg: 8.3,
      rpg: 3.9,
      rating: 94
    },
    {
      player_name: 'Domantas Sabonis',
      position: 'Power Forward',
      height: '6 foot 11',
      ppg: 19.3,
      apg: 3.9,
      rpg: 10.9,
      rating: 86
    },
    {
      player_name: 'Chris Paul',
      position: 'Point Guard',
      height: '6 feet',
      ppg: 13.2,
      apg: 11.3,
      rpg: 4.4,
      rating: 90
    },
    {
      player_name: 'Kevin Durant',
      position: 'Small Forward',
      height: '6 foot 11',
      ppg: 29.5,
      apg: 5.3,
      rpg: 8.7,
      rating: 96
    },
    {
      player_name: 'Bradley Beal',
      position: 'Shooting Guard',
      height: '6 foot 3',
      ppg: 24.2,
      apg: 5.4,
      rpg: 5.3,
      rating: 89
    },
    {
      player_name: 'Kyrie Irving',
      position: 'Point Guard',
      height: '6 foot 2',
      ppg: 26.9,
      apg: 4.8,
      rpg: 6.0,
      rating: 91
    },
    {
      player_name: 'Kawhi Leonard',
      position: 'Shooting Guard',
      height: '6 foot 7',
      ppg: 24.8,
      apg: 5.2,
      rpg: 6.5,
      rating: 95
    },
    {
      player_name: 'Jayson Tatum',
      position: 'Shooting Guard',
      height: '6 foot 11',
      ppg: 23.6,
      apg: 3.3,
      rpg: 8.4,
      rating: 90
    },
    {
      player_name: 'Zion Williamson',
      position: 'Power Forward',
      height: '6 foot 6',
      ppg: 27.0,
      apg: 3.7,
      rpg: 7.2,
      rating: 89
    },
    {
      player_name: 'Mike Conley',
      position: 'Point Guard',
      height: '6 foot 11',
      ppg: 15.7,
      apg: 4.9,
      rpg: 1.9,
      rating: 83
    },
    {
      player_name: 'James Harden',
      position: 'Shooting Guard',
      height: '6 foot 11',
      ppg: 18.3,
      apg: 8.5,
      rpg: 7.7,
      rating: 94
    },
    {
      player_name: 'Zach Lavine',
      position: 'Shooting Guard',
      height: '6 foot 5',
      ppg: 26.2,
      apg: 4.3,
      rpg: 5.7,
      rating: 87
    },
    {
      player_name: 'Donovan Mitchell',
      position: 'Shooting Guard',
      height: '6 foot 1',
      ppg: 25.9,
      apg: 5.3,
      rpg: 4.2,
      rating: 88
    },
    {
      player_name: 'Julius Randle',
      position: 'Power Forward',
      height: '6 foot 8',
      ppg: 22.5,
      apg: 5.5,
      rpg: 11.0,
      rating: 87
    },
    {
      player_name: 'Nikola Vucevic',
      position: 'Center',
      height: '7 feet',
      ppg: 13.2,
      apg: 4.3,
      rpg: 11.0,
      rating: 83
    },
    {
      player_name: 'Devin Booker',
      position: 'Shooting Guard',
      height: '6 foot 6',
      ppg: 23.8,
      apg: 5.2,
      rpg: 6.1,
      rating: 89
    },
    {
      player_name: 'Anthony Davis',
      position: 'Power Forward',
      height: '6 foot 10',
      ppg: 23.9,
      apg: 2.7,
      rpg: 11.1,
      rating: 93
    },
    {
      player_name: 'Joel Embiid',
      position: 'Shooting Guard',
      height: '7 feet',
      ppg: 21.4,
      apg: 4.0,
      rpg: 9.4,
      rating: 95
    },
  ])
}
