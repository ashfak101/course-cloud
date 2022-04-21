import Banner from "components/home/Banner";
import BecomeInstructor from "components/home/BecomeInstructor";
import EasyAccess from "components/home/EasyAccess";
import Faq from "components/home/Faq";
import Subscription from "components/home/Subscription";
import ExploreCourses from "components/home/ExploreCourses";
import type { NextPage } from "next";
import Footer from "components/home/Footer";

const Home: NextPage = () => {
 return (
  <>
   <Banner />
   <BecomeInstructor />
   <ExploreCourses />
   <EasyAccess />
   <Subscription />
   <Faq />
   <Footer/>
  </>
 );
};

export default Home;
