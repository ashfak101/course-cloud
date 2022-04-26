import { NextApiRequest, NextApiResponse } from "next";
import fakeData from "../../../public/fakeData.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
 try {
  fetch(`https://api.npoint.io/8b635b31d3c9d683fcec`)
   .then((res) => res.json())
   .then((data) => res.send(data));
 } catch (error) {
  console.log(error);
 }
}
