import axios from "axios"
import { resolve } from "path"

//returns 

type LoginProps = {
    email: string,
    password: string
}

type RegisterProps = {
    name: string,
    email: string,
    password: string
}

type AddDocument = {
    userID: string,
    title: string,
    content: string
}

type AddTag = {
    documentID: string,
    tagID: string
}

export const useBackend = () => {

    async function UseLogin(props:LoginProps){

        const res = await axios.post("https://localhost:7124/api/User/login", {
            email: props.email,
            password: props.password
        });
        return res.data;
    }

    async function UseRegister(props:RegisterProps) {

        const res = await axios.post("https://localhost:7124/api/User/register", {
            name : props.name,
            email : props.email,
            password : props.password
        });

        // console.log(res);

        return res;
    }

    async function AddDocument(props:AddDocument){
        const res = await axios.post("https://localhost:7124/api/Document/PostDocument", {
            userID: props.userID,
            title: props.title,
            content: props.content
        });

        // console.log(res);

        return res;
    }

    async function AddTag (props:AddTag) {
        const res = await axios.post("https://localhost:7124/api/Document/PostDocumentTag", {
            documentID : props.documentID,
            tagID : props.tagID
        });
        return res;
    }

    async function FetchDocument () {
        const res = await axios.get("https://localhost:7124/api/Document/GetDocument");
        // console.log(res);
        return res;
    }

    async function FetchTag () {
        const res = await axios.get("https://localhost:7124/api/Tag");
        // console.log(res);
        return (res);
    }

    async function FetchDocumentByTag (arr: string[]) {
        let temp = arr.join("&tagIDs=");
        const res = await axios.get(`https://localhost:7124/api/Document/SearchDocumentsByTags?tagIDs=${temp}`);
        return res;
    }

    async function FetchOneDocument (documentID:any) {
        const res = await axios.get(`https://localhost:7124/api/Document/GetDocumentByDocumentID/${documentID}`);
        // console.log(res);
        return res;
    }

    async function FetchDocumentByUser (userID:any){
        const res = await axios.get(`https://localhost:7124/api/Document/GetDocumentByUserID/${userID}`);
        // console.log(res.data);
        return res;
    }

    async function FetchAllDocument (){
        const res = await axios.get('https://localhost:7124/api/Document/GetAllDocument');
        return res;
    }

return {UseLogin, UseRegister, AddDocument, FetchDocument, FetchTag, AddTag, FetchDocumentByTag, FetchOneDocument, FetchDocumentByUser, FetchAllDocument};
}   