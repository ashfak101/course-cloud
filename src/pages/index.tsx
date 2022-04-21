import Banner from "components/home/Banner";
import BecomeInstructor from "components/home/BecomeInstructor";
import EasyAccess from "components/home/EasyAccess";
import Faq from "components/home/Faq";
import Subscription from "components/home/Subscription";
import ExploreCourses from "components/home/ExploreCourses";
import type { NextPage } from "next";
import Footer from "components/home/Footer";

const Home: NextPage = ({ courses }: any) => {
 console.log(courses);

 return (
  <>
   <Banner />
   <BecomeInstructor />
   <ExploreCourses />
   <EasyAccess />
   <Subscription />
   <Faq />
   <Footer />
  </>
 );
};

export default Home;

export async function getStaticProps() {
 // https://tawsifhye.github.io/data/courses.json

 const courseResponse = await fetch("http://localhost:3000/api/course-data");
 const courses = await courseResponse.json();

 return {
  props: {
   courses,
  },
 };
}
