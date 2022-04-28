import { NextApiRequest, NextApiResponse } from "next";
import fakeData from "../../../public/fakeData.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
 try {
  fetch(`https://tawsifhye.github.io/data/coursecloudcourses.json`)
   .then((res) => res.json())
   .then((data) => res.send(data));
 } catch (error) {
  console.log(error);
 }
}
