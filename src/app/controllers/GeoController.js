import * as Yup from "yup";
import Sequelize from "sequelize";
import axios from "axios";
import SchoolList from "../models/SchoolList";

class GeoController {
  async index(req, res) {
    const schema = Yup.object().shape({
      distance: Yup.number(),
      page: Yup.number(),
      limit: Yup.number()
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: "Validation failed" });
    }

    const {
      latitude,
      longitude,
      distance = 5,
      page = 1,
      limit = 50
    } = req.query;

    const newDistance = distance / 1.64;

    const sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      { dialect: "postgres" }
    );

    const response = await sequelize.query(
      `

  SELECT *, point(${longitude},${latitude}) <@> point(longitude, latitude)::point as distance
  FROM school_lists
  WHERE  (point(${longitude},${latitude} ) <@> point(longitude, latitude)) < ${newDistance}
  ORDER BY distance`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    return res.json(response);
  }
}

export default new GeoController();
