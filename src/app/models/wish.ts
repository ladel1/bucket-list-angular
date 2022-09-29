export class Wish{

    constructor(
        private title:string,
        private description:string,
        private author:string,
        private isPublished:boolean,
        private dateCreated:Date
    ){
        this.isPublished = true;
        this.dateCreated = new Date();
    }
    setTitle(title:string){
        this.title=title;
    } 

    setDescription(description:string){
        this.description = description;
    }
    
    getTitle(){
        return this.title;
    }    
    getDescription(){
        return this.description;
    }
    getAuthor(){
        return this.author;
    }
    getIsPublished(){
        return this.isPublished;
    }
    getDateCreated(){
        return this.dateCreated;
    }

}