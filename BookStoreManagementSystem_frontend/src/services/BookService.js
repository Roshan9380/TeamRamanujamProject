export default class BookService{
    constructor(){
        this.uri = "http://localhost:8088/book";
        this.books = [];
    }

    
    async getBooks() {
        return await fetch(this.uri + "/fetchall").then(response => {
           if(!response.ok) {
               this.handleResponseError(response);
           }
           return response.json();
       }).then(data => {  
           console.log("books data from service" + data);          
           return data;
       }).catch(error => {
           console.log("Error : "  + error.message)
       })
   }

   
   async saveBook(book) {
        return await fetch(this.uri+"/add", {
            method:"POST",
            mode:"cors",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(book)
        }).then(response => {
        if(!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
        }).catch(error => {
            console.log(error.message);
        });
    }

    
    async updateBook(book){
        return await fetch(this.uri+"/update", {
            method:"PUT",
            mode:"cors",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(book)
        }).then(response => {
        if(!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
        }).catch(error => {
            console.log("Error : " + error.message);
        });
    }

    
    async deleteBook(bid){
        return await fetch(this.uri + "/remove/"+ bid, {
            method:"DELETE",
            mode:"cors"
        }).then(response => {
            if(!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).catch(error => {
            console.log("Error : " + error.message);
        })
    }

    
    async getBooksForCustomer(bookName) {
        return await fetch(this.uri +
             `/fetch?bookName=${bookName}`)
        .then(response => {
           if(!response.ok) {
               this.handleResponseError(response);
           }
           return response.json();
       }).then(data => {  
           console.log("books data from service" + data);          
           return data;
       }).catch(error => {
           console.log("Error : "  + error.message)
       })
   }
}