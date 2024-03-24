import { CiLocationOn,CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const { id,logo, job_title, company_name, remote_or_onsite
        , location, job_type, salary, job_description,
        job_responsibility, educational_requirements,
        experiences } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className=" text-[#7E90FE] px-4 py-2 mr-4
                     font-medium text-[16px] border rounded border-[#7E90FE]">{remote_or_onsite}</button>

                    <button className=" text-[#7E90FE] px-4 py-2 mr-4
                     font-medium text-[16px] border rounded border-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex mt-4">
                    <h2 className="flex mr-4"> <CiLocationOn className="text-xl mr-2" /> {location}</h2>
                    <h2 className="flex"> <CiDollar className="text-xl mr-2" /> {salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;