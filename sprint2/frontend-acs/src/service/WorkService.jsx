import axios from 'axios';

const Work_API_BASE_URL = "http://localhost:7777/api/work";

class WorkService{
    addWork(work){
        return axios.post(Work_API_BASE_URL,work);
    }
    getAllWork(){
        return axios.get(Work_API_BASE_URL);
    }
    deleteWork(workId){
        return axios.delete(Work_API_BASE_URL + '/' + workId);
    }
    updateWork(workId,work){
        return axios.get(Work_API_BASE_URL + '/' + workId,work)
    }
    getWorkById(workId){
        return axios.get(Work_API_BASE_URL+ '/' + workId);
    }
}

export default new WorkService();