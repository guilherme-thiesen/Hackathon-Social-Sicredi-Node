import * as Yup from "yup";
import { Op } from "sequelize";
import SchoolList from "../models/SchoolList";
import SchoolType from "../models/SchoolType";
import file from "../../../data.json";

class CensoController {
  async index(req, res) {
    file.map(async escola => {
      escola.category_id = escola.category;
      const response = await SchoolList.create(escola);
    });

    return res.json({});
  }
}

export default new CensoController();
