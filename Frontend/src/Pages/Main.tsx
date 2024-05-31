import { useEffect, useState } from "react"
import "./Main.css"
import { useBackend } from "../Custom Hooks/useBackend"
import { useNavigate } from 'react-router-dom'
import { Content } from "./Content"

import img1 from "../Resources/img1.jpg"
import img2 from "../Resources/img2.jpg"
import img3 from "../Resources/img3.jpg"
import img4 from "../Resources/img4.jpg"
import img5 from "../Resources/img5.jpg"

interface getTag {
    tagID: string,
    tagName: string
}

type Tag = {
    tagID: string,
    tagName: string,
    tagImage : string,
}

interface getDoc {
    documentID: string,
    userID: string,
    userName: string,
    title: string,
    content: string,
    publishedTime: string,
    tag: Tag[],
}

export default function Main() {

    const navigate = useNavigate()

    const { FetchTag, FetchDocumentByTag, FetchAllDocument } = useBackend()

    const [tagList, SetTagList] = useState<getTag[]>([]);
    const [postList, SetPostList] = useState<getDoc[]>([]);
    const [selectedTag, SetSelectedTag] = useState<string[]>([]);

    useEffect(() => {
        const fetchTagAndDocument = async () => {
            const tagRes = await FetchTag()
            SetTagList(tagRes.data)

            const docRes = await FetchAllDocument()
            SetPostList(docRes.data)
        }
        fetchTagAndDocument()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const checkBoxChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        let res: string[] = [];
        if (e.target.checked) { // ada yang di click
            SetSelectedTag([...selectedTag, e.target.value])
            res = [...selectedTag, e.target.value]
        } else { // ada yang di un-click
            for (let i = 0; i < selectedTag.length; i++) {
                if (selectedTag[i] === e.target.value) {
                    let arr = selectedTag
                    arr.splice(i, 1)
                    SetSelectedTag(arr)
                    res = arr
                }
            }
        }
        fetchByTag(res)
    }

    const fetchByTag = async (arr: string[]) => {

        if (arr.length > 0) { // ada tag yang dipilih
            try {
                const res = await FetchDocumentByTag(arr)
                SetPostList(res.data)
            } catch {
                alert("No Available with designated tag")
            }
        } else { // gada tag yang dipilih (ngambil semua document)
            const docRes = await FetchAllDocument()
            SetPostList(docRes.data)
        }

    }

    return (
        <div className="main">
            <div className="main-header">
                <div className="left-header">
                    <h1>Elevate your understanding.</h1>
                </div>
                <div className="right-header">
                    <p>Discover more of what matters to you</p>
                    <div className="tag-list-div">
                        {tagList.map((tag, id) => {
                            return (
                                <div key={id}>
                                    <input type="checkbox"
                                        id={tag.tagName} value={tag.tagID}
                                        name="tag-list-main-page"
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
            <div className="post-list-div-container">
                <div className="post-list-div">
                    {postList.map((post, id) => {
                        return (
                            <div className="post-overview" onClick={() => navigate(`/read/${post.documentID}/${id}`)}>
                                <div key={id}>
                                    {id % 5 === 0 && <img src={img1} alt="" />}
                                    {id % 5 === 1 && <img src={img2} alt="" />}
                                    {id % 5 === 2 && <img src={img3} alt="" />}
                                    {id % 5 === 3 && <img src={img4} alt="" />}
                                    {id % 5 === 4 && <img src={img5} alt="" />}
                                    <div className="post-text">
                                        <p className="post-title">{post.title}</p>
                                        <p className="post-content">{post.content}</p>
                                        <div className="post-published-time"><p><b>{post.publishedTime.slice(0, 10)}</b></p><p><b>Written by {post.userName}</b></p></div>
                                    </div>
                                    <div className="tag-list-div">
                                            {post.tag.map((tag, id) =>{
                                                return (
                                                    <img src={tag.tagImage}></img>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}