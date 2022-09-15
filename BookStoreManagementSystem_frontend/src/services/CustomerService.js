import axios from "axios";

export default class CustomerService{

    constructor(){
        this.uri="http://localhost:8088/customer";
       
    }

   
    async addCustomer(customer){
        return await axios.post(this.uri+"/createcustomer",customer).then(response=>{
            return response;
        });
    }

    
    getCustomers(){
        return this.customers;
    }

 
    async validateCustomer(customerName,password){
        return await axios.get(this.uri+"/auth/"+customerName+"/"+password).then(res=>{
            console.log(res);
            console.log(res.data);
            return res;
        });;
    }
}