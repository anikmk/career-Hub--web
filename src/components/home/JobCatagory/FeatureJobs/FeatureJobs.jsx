import { useEffect, useState } from "react";
import FeatureJob from "./featureJob/FeatureJob";


const FeatureJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('featurejobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div>
            <h1>features jobs</h1>
            </div>
           <div>
           {
                jobs.map(job => <FeatureJob key={job.id} job={job}></FeatureJob>)
            }
           </div>
        </div>
    );
};

export default FeatureJobs;