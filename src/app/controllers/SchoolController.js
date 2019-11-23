import * as Yup from "yup";
import { Op } from "sequelize";
import School from "../models/School";

class SchoolController {
  async index(req, res) {
    const { themes, page = 1, limit = 50 } = req.query;
    const offset = (page - 1) * limit;

    const where = {};
    if (themes) {
      where.themes = { [Op.contains]: themes };
    }

    const response = await School.findAll({
      where: where || false,
      limit,
      offset
    });

    return res.json(response);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.number(),

      email: Yup.string()
        .email()
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation failed" });
    }

    const response = await School.create(req.body);
    return res.json({
      response
    });
  }
}

export default new SchoolController();
