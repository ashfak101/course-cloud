
import Banner from "components/home/Banner";
import BecomeInstructor from "components/home/BecomeInstructor";
import EasyAccess from "components/home/EasyAccess";
import Faq from "components/home/Faq";
import Subscription from "components/home/Subscription";
import type { NextPage } from "next";

const Home: NextPage = () => {
 return (
     <>
     <Banner/>
     <BecomeInstructor/>
     <EasyAccess/>
     <Subscription/>
     <Faq/>
     </>
 )
};

export default Home;
