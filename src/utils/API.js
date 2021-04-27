import axios from "axios";

const employeeApi = "https://randomuser.me/";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(employeeApi + query);
  }
};