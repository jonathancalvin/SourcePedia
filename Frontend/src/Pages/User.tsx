import { Link, useNavigate, useParams } from 'react-router-dom'
import './User.css'
import { useBackend } from '../Custom Hooks/useBackend';
import { useEffect, useState } from 'react';

import img1 from "../Resources/img1.jpg"
import img2 from "../Resources/img2.jpg"
import img3 from "../Resources/img3.jpg"
import img4 from "../Resources/img4.jpg"
import img5 from "../Resources/img5.jpg"

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


export const User = () =>{
    const navigate = useNavigate();
    const { userID } = useParams<string>();
    const { FetchDocumentByUser } = useBackend();
    const [data, setData] = useState<getDoc[]>([]);
    let tempUser = "";
    useEffect(() =>{
        const getData = async() =>{
            const res = await FetchDocumentByUser(userID);
            setData(res.data);
            console.log(res.data);
        }
        getData();
    }, [])
    return(
        <div className='user-container'>
            <div className='header'>
                More From {data[0]?.userName}
            </div>
            <div className="post-list-div-container">
                <div className="post-list-div">
                    {data.map((post, id) => {
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
                                        <p className="post-published-time"><b>{post.publishedTime.slice(0, 10)}</b></p>
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