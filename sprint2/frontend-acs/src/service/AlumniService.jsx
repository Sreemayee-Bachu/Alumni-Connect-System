import axios from 'axios';

const Alumni_API_BASE_URL = "http://localhost:7777/api/alumni";

class AlumniService{
    addAlumni(alumni){
        return axios.post(Alumni_API_BASE_URL,alumni);
    }
    getAllAlumni(){
        return axios.get(Alumni_API_BASE_URL);
    }
    deleteAlumni(alumniId){
        return axios.delete(Alumni_API_BASE_URL + '/' + alumniId);
    }
    getAlumniById(alumniId){
        return axios.get(Alumni_API_BASE_URL+'/'+alumniId)
    }
    updateAlumni(alumniId,alumni){
        return axios.put(Alumni_API_BASE_URL+'/'+alumniId,alumni)
    }
}

export default new AlumniService()