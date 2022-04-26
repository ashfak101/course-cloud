import Banner from "components/home/Banner";
import BecomeInstructor from "components/home/BecomeInstructor";
import EasyAccess from "components/home/EasyAccess";
import Faq from "components/home/Faq";
import Subscription from "components/home/Subscription";
import ExploreCourses from "components/home/ExploreCourses";
import type { GetStaticProps, NextPage } from "next";
import Footer from "components/home/Footer";
import { CourseData, GetCoursesData } from "../../types";
import DealoftheDay from "components/home/DealoftheDay";
import FeaturedInstructors from "components/home/FeaturedInstructors";
import Feedback from "components/home/Feedback";
import { GetBlogsData } from "../../types-blog";
import RecentBlogs from "components/home/RecentBlogs";

const Home: NextPage<{ courses: CourseData }> = ({ courses }) => {
 return (
  <>
   <Banner />
   <BecomeInstructor />
   <ExploreCourses courses={courses} />
   <DealoftheDay courses={courses} />
   <FeaturedInstructors courses={courses} />
   <Feedback courses={courses} />
   <RecentBlogs />
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

 const blogResponse = await fetch("https://api.npoint.io/25e8205992894fabbd1d");
 const blogs: GetBlogsData = await blogResponse.json();

 const courses: GetCoursesData = await courseResponse.json();

 return {
  props: {
   courses,
   blogs,
  },
 };
};
