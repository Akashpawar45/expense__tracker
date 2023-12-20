import axios from 'axios';
export const base_url="http://localhost:8080";

export const addExpenseApi = async (payload) => {
    try {

        return await axios.post(`${base_url}/expensetracker`, payload);
    } catch (error) {
        console.log('Error: ', error.message);
        return error;
        
       
    }
}


export const deleteExpenseApi = async (index) => {
    try {
        return await axios.delete(`${base_url}/deletebyid/${index+1}`);
    } catch (error) {
        console.log('Error: ', error.message);
        return error;
    }
}
