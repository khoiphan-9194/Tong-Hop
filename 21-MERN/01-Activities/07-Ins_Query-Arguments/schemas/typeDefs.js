const typeDefs = `
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
    classes: [Class]
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
    # Define a query with an ID parameter to return a single Class object
    class(id: ID!): Class
    professor(id: ID!): Professor
    
  }
`;
// an indentifier ID!: the exclamation point means that it's required, Class is the type that needs to be returned
module.exports = typeDefs;
