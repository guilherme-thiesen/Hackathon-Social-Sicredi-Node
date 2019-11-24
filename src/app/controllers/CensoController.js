import * as Yup from "yup";
import { Op } from "sequelize";
import axios from "axios";
import SchoolType from "../models/SchoolType";
import file from "../../../data.json";

class CensoController {
  async index(req, res) {
    file.map(async escola => {
      escola.category_id = escola.category;
      delete escola.phone;
      escola.email = "noemail";
      const response = await axios.post("http://167.172.16.177", escola);

      console.log(response);
    });

    return res.json({});
  }
}

export default new CensoController();
