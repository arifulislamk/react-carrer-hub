const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className=" flex flex-col space-y-4 md:space-y-8 items-center md:items-start md:justify-center ">
                <h2 className=" text-3xl md:text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className="text-blue-500">Dream Job</span></h2>
                <p className="">Explore thousands of job opportunities with all the information you need. Its your future
                    . Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-primary w-2/6">Get Started</button>
            </div>
            <div className="">
                <img src="/src/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;