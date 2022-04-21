import { NextApiRequest, NextApiResponse } from "next";
import fakeData from "../../../public/fakeData.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
 //
 res.send({ data: fakeData });
}
