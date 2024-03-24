import { useLoaderData } from "react-router-dom";
import { getStoredJobsApplication } from "../../Utility/localStorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedjob, setappliedjob] = useState([]);
    const [displayJob, setdisplayJob] = useState([]);

    const handlefilter = filter => {
        if (filter === 'all') {
            setdisplayJob(appliedjob)
        }
        else if (filter === 'remote') {
            const remoteappiledjob = appliedjob.filter(job => job.remote_or_onsite === 'Remote')
            setdisplayJob(remoteappiledjob)
        }
        else if (filter === 'onsite') {
            const onsiteappiledjob = appliedjob.filter(job => job.remote_or_onsite === 'Onsite')
            setdisplayJob(onsiteappiledjob)
        }
    }

    useEffect(() => {
        const storedJobId = getStoredJobsApplication();
        if (jobs) {
            // const jobAppiled = jobs.filter(job => storedJobId.includes(job.id))

            const jobAppiled = [];
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobAppiled.push(job)
                }
            }
            // console.log(jobs, storedJobId, jobAppiled)
            setappliedjob(jobAppiled)
            setdisplayJob(jobAppiled)
        }
    }, [jobs])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Applied Jobs : {appliedjob.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handlefilter('all')}><a>All</a></li>
                    <li onClick={() => handlefilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handlefilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <ul>
                {
                    displayJob.map(job => <li key={job.id}>
                        <span>{job.job_title} : {job.company_name} : {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;