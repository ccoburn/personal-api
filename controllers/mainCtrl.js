var user = require('../user.js');

module.exports = {

  getUser: function(req, res, next) {
    res.status(200).send({user: user})
  },
  getName: function(req, res, next) {
    res.status(200).send({name: user.name})
  },
  getLocation: function(req, res, next) {
    res.status(200).send({location: user.location})
  },
  getOccupations: function(req, res, next) {
    if (req.query.order === "desc") {
      var decend = user.occupations.sort();
      res.status(200).send({occupations: decend});
    }
    if (req.query.order === "asc") {
      var ascend = user.occupations.reverse();
      res.status(200).send({occupations: ascend});
    }
    res.status(200).send({occupations: user.occupations});
  },
  getLatestOccupation: function(req, res, next) {
    var latest = user.occupations[user.occupations.length -1];
    res.status(200).send({latestOccupation: latest})
  },
  getHobbies: function(req, res, next) {
    res.status(200).send({hobbies: user.hobbies})
  },
  getHobbiesType: function(req, res, next) {
    var hType = []
    for (var i = 0; i < user.hobbies.length; i++) {
      if (user.hobbies[i].type === req.params.type) {
        hType.push(user.hobbies[i]);
      }
    }
    res.status(200).send({hobbies: hType})
  },
  getFamily: function(req, res, next) {
    res.status(200).send({family: user.family})
  },
  getFamilyGender: function(req, res, next) {
    var result = []
    for (var i = 0; i < user.family.length; i++) {
      if (user.family[i].gender === req.params.gender) {
      result.push(user.family[i]);
      }
    }
    res.status(200).send({family: result})
  },
  getRestaurants: function(req, res, next) {
    res.status(200).send({restaurants: user.restaurants})
  },
  getRestaurantsName: function(req, res, next) {
    for (var i = 0; i < user.restaurants.length; i++) {
      if (user.restaurants[i].name === req.params.name) {
      res.status(200).send({restuarant: user.restaurants[i]})
      }
    }
  },




}
