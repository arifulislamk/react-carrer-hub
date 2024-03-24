const getStoredJobsApplication = () => {
    const storeJobApplication = localStorage.getItem('application-id') ;
    if(storeJobApplication){
        return JSON.parse(storeJobApplication)
    }
    return [];
}
const saveJobApplication = id => {
    const storedJobApplication = getStoredJobsApplication() ;
    const exist = storedJobApplication.find(jobid => jobid === id) ;
    if(!exist){
        storedJobApplication.push(id) ;
        localStorage.setItem('application-id', JSON.stringify(storedJobApplication))
    }
}
export { getStoredJobsApplication,saveJobApplication} ;