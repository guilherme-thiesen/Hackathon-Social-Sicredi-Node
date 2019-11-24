import Sequelize from "sequelize";

import User from "../app/models/User";
import UserCategory from "../app/models/UserCategory";
import School from "../app/models/School";
import SchoolCategory from "../app/models/SchoolCategory";
import SchoolFoodType from "../app/models/SchoolFoodType";
import SchoolInfraestructure from "../app/models/SchoolInfraestructure";
import databaseConfig from "../config/database";

const models = [
  UserCategory,
  User,
  School,
  SchoolCategory,
  SchoolFoodType,
  SchoolInfraestructure
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
