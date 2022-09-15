import axios from "axios"

export default class OrderService {
    constructor() {
        this.uri = "http://localhost:8088/orders";
    }

 
    async addOrder(numberOfBooksToBook,bookId,bookName) {
        return await axios.post(this.uri+"/order",{numberOfBooksToBook},
        {params:{"bid":bookId,"bookName":bookName}}).then(response => {
            console.log(response.data)
            if(response.data.length>3){
                alert(response.data)
                return response
            } else{
                localStorage.setItem("oid",parseInt(response.data))
                return response
            }
        })
    }

    async generateOrderDetails(orderdetail){
        const cid = JSON.parse(localStorage.getItem("customer")).customerId;
        return await axios.post(this.uri+"/orderdDetails/"+cid+"/"+localStorage.getItem("oid")+"/1",orderdetail)
        .then(response => {
            console.log(response.data)
            localStorage.setItem("orderdetail",JSON.stringify(response.data))
            return response;
        })
    }

    async getOrderDetails() {
        const cid = JSON.parse(localStorage.getItem("customer")).customerId;
        return await axios.get(this.uri+"/getOrderDetails/"+cid)
        .then(response => {
            console.log(response.data)
     
            return response;
        })
    }

}