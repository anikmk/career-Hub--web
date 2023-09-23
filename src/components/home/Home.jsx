import HomeBanner from "../HomeBanner/HomeBanner";
import FeatureJobs from "./JobCatagory/FeatureJobs/FeatureJobs";
import Jobcatagory from "./JobCatagory/Jobcatagory";


const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>
            <Jobcatagory></Jobcatagory>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;