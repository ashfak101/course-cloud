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
 console.log(courses);

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
 // https://tawsifhye.github.io/data/courses.json

 const courseResponse = await fetch("http://localhost:3000/api/course-data");
 const courses: GetCoursesData = await courseResponse.json();

 return {
  props: {
   courses,
  },
 };
};
