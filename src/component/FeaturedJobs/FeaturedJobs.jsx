import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [datalength, setdatalength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);


    return (
        <div className="mt-20">
            <h2 className=" mb-5 text-5xl font-bold text-center">Featured Jobs</h2>
            <p className=" text-center"> Explore thousands of job opportunities
                with all the information you need. Its your future</p>
            <div className=" mt-10 grid md:grid-cols-2 gap-10">
                {
                    jobs.slice(0,datalength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={datalength == jobs.length ? 'hidden' : 'text-center mt-5'}>
                <button onClick={() => setdatalength(jobs.length)} className="btn btn-primary">See All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;