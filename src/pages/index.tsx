import Banner from "components/home/Banner";
import BecomeInstructor from "components/home/BecomeInstructor";
import EasyAccess from "components/home/EasyAccess";
import Faq from "components/home/Faq";
import Subscription from "components/home/Subscription";
import ExploreCourses from "components/home/ExploreCourses";
import type { GetStaticProps, NextPage } from "next";
import Footer from "components/home/Footer";
import { CourseData, GetCoursesData } from "../../types";

const Home: NextPage<{ courses: CourseData }> = ({ courses }) => {
 return (
  <>
   <Banner />
   <BecomeInstructor />
   <ExploreCourses courses={courses} />
   <EasyAccess />
   <Subscription />
   <Faq />
   <Footer />
  </>
 );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
 const courseResponse = await fetch(
  "https://api.npoint.io/8b635b31d3c9d683fcec"
 );
 const courses: GetCoursesData = await courseResponse.json();

 return {
  props: {
   courses,
  },
 };
};
