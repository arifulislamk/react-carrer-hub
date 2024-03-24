import { useEffect, useState } from "react";
import CatagoryJob from "../CatagoryJob/CatagoryJob";

const CatagoryList = () => {
    const [catagoryJob, setCatagoryJob] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCatagoryJob(data))
    }, [])


    return (
        <div className="mt-20">
            <div>
                <h2 className=" text-5xl font-bold text-center mb-5">Job Category List</h2>
                <p className=" text-center">Explore thousands of job opportunities with all the information
                    you need. Its your future</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-10">
                {
                    catagoryJob.map(catagoryJob => <CatagoryJob key={catagoryJob.id}
                        catagoryjob={catagoryJob}></CatagoryJob>)
                }
            </div>

        </div>
    );
};

export default CatagoryList;