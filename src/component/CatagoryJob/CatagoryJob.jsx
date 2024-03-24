const CatagoryJob = ({catagoryjob}) => {

    const {logo,category_name,availability} = catagoryjob ;
    return (
        <div className="space-y-4 p-4 bg-[#7E90FE1A] rounded-md">
            <img src={logo} alt="" />
            <h2 className=" text-3xl font-medium">{category_name}</h2>
            <p className=" text-xl ">{availability}</p>
        </div>
    );
};

export default CatagoryJob;