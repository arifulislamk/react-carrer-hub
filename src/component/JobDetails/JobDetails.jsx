import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn, CiDollar, CiPhone, CiMail } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    // console.log(jobs,id) ;

    const intid = parseInt(id)
    const job = jobs.find(job => job.id == intid);
    // console.log(job)
    const { logo, job_title, company_name, remote_or_onsite
        , location, job_type, salary, job_description,
        job_responsibility, educational_requirements, contact_information,
        experiences } = job;

    const handleappliedtostify = () => {
        saveJobApplication(intid)
        toast('Application Submit')
    }
    // console.log(contact_information)

    return (
        <div>
            <h2 className=" font-extrabold  text-4xl text-center mb-10"> Job Details </h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className=" md:col-span-3 space-y-5 ">
                    <p><span className=" font-extrabold ">Job Description: </span>
                        {job_description}</p>
                    <p><span className=" font-extrabold ">Job Responsibility: </span>
                        {job_responsibility}</p>
                    <p><span className=" font-extrabold ">Educational Requirements: </span> <br />
                        {educational_requirements}</p>
                    <p><span className=" font-extrabold ">Experiences: </span> <br />
                        {experiences}</p>
                </div>


                <div className="p-4 bg-[#7E90FE21] ">
                    <h2 className=" font-bold mb-4">Job Details</h2>
                    <div>
                        <p className="flex items-center "> <CiDollar className="mr-2" />
                            <span className="font-medium"> Salary : </span> {salary} (Per Month)</p>
                    </div>

                    <div>
                        <p className=""> <CiLocationOn className="mr-2 inline" />
                            <span className="font-medium"> Job Title : </span> {job_title}</p>
                    </div>

                    <div className="mt-6 ">
                        <h2 className=" font-bold"> Contact Information</h2>
                        <hr />
                        <div>
                            <p className=" items-center mt-5"> <CiPhone className="mr-2 inline" />
                                <span className="font-medium"> Phone :{contact_information.phone} </span> </p>
                            <p className=" items-center mt-5"> <CiMail className="mr-2 inline" />
                                <span className="font-medium"> Email :{contact_information.email} </span> </p>
                            <p className=" items-center mt-5"> <CiLocationOn className="mr-2 inline" />
                                <span className="font-medium"> Address :{contact_information.address} </span> </p>
                        </div>

                    </div>
                    <button onClick={handleappliedtostify} className="mt-3 btn btn-primary w-full">Apply Now</button>

                </div>

            </div>

            <ToastContainer />
        </div>
    );
};

export default JobDetails;