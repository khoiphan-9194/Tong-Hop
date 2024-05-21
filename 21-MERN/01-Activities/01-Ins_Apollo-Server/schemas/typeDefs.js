const typeDefs = `
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Student
  {
    name: String
    age: Int

  }

  type Query {
    classes: [Class]
    students: [Student]
  }
`;

module.exports = typeDefs;
