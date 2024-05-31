import { useEffect, useState } from "react"
import "./Write.css"
import { useBackend } from "../Custom Hooks/useBackend"
import  axios from "axios"
import { useLocalStorage } from "../Custom Hooks/useLocalStorage"
import { useNavigate } from "react-router-dom"

interface getTag {
    tagID: string,
    tagName: string
}

interface Credential {
    userID: string,
    userName: string,
}

export default function Write(){

    const { FetchTag, AddDocument, AddTag } = useBackend()

    const [tagList, SetTagList] = useState<getTag[]>([])
    const { setItem, getItem } = useLocalStorage("UserCredential");
    const cred = getItem();

    const [title, SetTitle] = useState("") // max 255
    const [tagSelected, SetTagSelected] = useState<string[]>([])
    const [content, SetContent] = useState("") // max 4000
    const navigate = useNavigate();


    useEffect(() => {
        const fetchTag = async () => {
            const res = await FetchTag()
            SetTagList(res.data)
        }
        fetchTag()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const checkBoxChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked) {
            SetTagSelected([...tagSelected, e.target.value])
        } else {
            for(let i=0; i<tagSelected.length; i++){
                if(tagSelected[i] === e.target.value) {
                    let arr = tagSelected
                    arr.splice(i, 1)
                    SetTagSelected(arr)
                }
            }
        }
    }

    const formSubmitted = async (event: React.FormEvent<HTMLFormElement>) => {

        if(cred) {
            event.preventDefault()

            if(tagSelected.length === 0){
                event.preventDefault()
                alert("Please select at least one tag")
            } else { // send data
                
                const sendDocument = await AddDocument({
                    userID: cred.userID, // mesti diganti nanti
                    title: title,
                    content: content,
                })

                const request = tagSelected.map((tag) => AddTag({
                    documentID: sendDocument.data,
                    tagID: tag,
                }))

                // ngejalanin semua request sekaligus
                axios.all(request)
                    .then((response) => {
                        if(response[0].status === 200){
                            alert("Post success")
                            navigate(`/user/${cred.userID}`)
                        } else {
                            alert("Post failed")
                        }
                    })

                
            }
        } else {
            navigate("/login")
        }
    }

    return (
        <div className="write">
            <div>
                <h1>Post Document</h1>
                <form className="write-form" onSubmit={formSubmitted}>

                    <div className="input-div">
                        <div><label htmlFor="title">Title</label></div>
                        <div>
                            <input value={title} required id="title"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                if(event.target.value.length <= 255) SetTitle(event.target.value)
                            }} />
                        </div>
                    </div>

                    <div className="input-div">
                        <div>Tag</div>
                        <div>
                            <div className="tag-list-container">
                                {tagList.map((tag, id) => {
                                    return (
                                        <div key={id}>
                                            <input type="checkbox" 
                                                id={tag.tagName} value={tag.tagID} 
                                                name="tag-list-write-page"
                                                className="tag-checkbox"
                                                onChange={checkBoxChecked}
                                            />
                                            <label className="checkbox-label" htmlFor={tag.tagName}>
                                                {tag.tagName}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="input-div">
                        <div><label htmlFor="content">Content</label></div>
                        <div>
                            <textarea value={content} required id="content"
                            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                if(event.target.value.length <= 4000) SetContent(event.target.value)
                            }}></textarea>
                            </div>
                    </div>

                    <div className="input-div">
                        <div></div>
                        <div>
                            <button type="submit" className="post-button">POST</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}