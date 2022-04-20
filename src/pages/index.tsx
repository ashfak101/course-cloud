import Banner from "components/home/Banner";
import BecomeInstructor from "components/home/BecomeInstructor";

import ExploreCourses from "components/home/ExploreCourses";

import EasyAccess from "components/home/EasyAccess";
import Subscription from "components/home/Subscription";

import type { NextPage } from "next";

const Home: NextPage = () => {
 return (
  <>
   <Banner />
   <BecomeInstructor />
   <ExploreCourses />
  </>
 );

};

export default Home;
