import { Paper } from "@mui/material";
import Banner from "components/home/Banner";
import BecomeInstructor from "components/home/BecomeInstructor";
import DealoftheDay from "components/home/DealoftheDay";
import EasyAccess from "components/home/EasyAccess";
import ExploreCourses from "components/home/ExploreCourses";
import Faq from "components/home/Faq";
import FeaturedInstructors from "components/home/FeaturedInstructors";
import Feedback from "components/home/Feedback";
import RecentBlogs from "components/home/RecentBlogs";
import Subscription from "components/home/Subscription";
import type { GetStaticProps, NextPage } from "next";
import { CourseData, GetCoursesData } from "../../types";
import { GetBlogsData, BlogsData } from "../../types-blog";

const Home: NextPage<{ courses: CourseData; blogs: BlogsData[] }> = ({
    courses,
    blogs,
}) => {
    return (
        <>
            <Paper>
                <Banner />
                <BecomeInstructor />
                <ExploreCourses courses={courses} />
                <DealoftheDay courses={courses} />
                <FeaturedInstructors courses={courses} />
                <Feedback courses={courses} />
                <RecentBlogs blogs={blogs} />
                <EasyAccess />
                <Subscription />
                <Faq />
            </Paper>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
    const courseResponse = await fetch(
        "https://tawsifhye.github.io/data/coursecloudcourses.json"
    );
    const courses: GetCoursesData = await courseResponse.json();

    const blogResponse = await fetch(
        "https://tawsifhye.github.io/data/coursecloudblogs.json"
    );
    const blogs: GetBlogsData = await blogResponse.json();

    return {
        props: {
            courses,
            blogs,
        },
    };
};
