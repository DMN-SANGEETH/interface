import axios from "axios";

const   ISSU_BASE_REST_API_URL = "http://localhost:8082/api/v1/issue";

class IssuesService{
    getAllIssues(){
        return axios.get(ISSU_BASE_REST_API_URL)
    }
}
export default new IssuesService();