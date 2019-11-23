import * as Yup from "yup";
import User from "../models/User";

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

    const offset = (page - 1) * limit;

    const response = await User.query(`
    SELECT *, point(${latitude}, ${longitude}) <@> point(longitude, latitude)::point as distance
    FROM location
    WHERE (point(${latitude}, ${longitude}) <@> point(longitude, latitude)) < ${distance}
    ORDER BY distance OFFSET ${offset} limit ${limit}`);

    return res.json(response);
  }
}

export default new GeoController();
