const { Class } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    },


    // for students, we don't have to put async because we doing hard code to input data
    students: async () =>
    {
      return [{name:"PMK",age:30}, {name:"Heomap",age:32},{name:"Cho dien",age:20}]
    }
  }
};

module.exports = resolvers;
