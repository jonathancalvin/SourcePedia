import { Link, useParams } from 'react-router-dom'
import './Content.css'
import { useBackend } from '../Custom Hooks/useBackend';
import { useEffect, useState } from 'react';
import { User } from './User';

import img1 from "../Resources/img1.jpg"
import img2 from "../Resources/img2.jpg"
import img3 from "../Resources/img3.jpg"
import img4 from "../Resources/img4.jpg"
import img5 from "../Resources/img5.jpg"
import { string } from 'zod';

type getDoc = {
    content: string,
    documentID: string,
    publishedTime: string,
    title: string,
    userID: string,
    userName: string,
}

export const Content = () =>{
    const { documentID, imageID } = useParams<string>();
    const { FetchOneDocument } = useBackend();
    const [data, setData] = useState<getDoc>();
    const id = eval(`${imageID}%5`);
    useEffect(() => {
        const getData = async() =>{
            const data = await FetchOneDocument(documentID);
            // console.log(data);
            setData(data.data);
        }
        getData();
    },[])

    return (
        <div className='content-container'>
            <div className='header'>
                <div className='content-title'>{data?.title}</div>
                <div className="published-time">Published on: {data?.publishedTime.slice(0, 10)}</div>
                <Link to={`/user/${data?.userID}`} style={{textDecoration:'none', color:'black'}}><div className="author-name">Written by {data?.userName}</div></Link>
            </div>
            <div className='content-image'>
                {id % 5 === 0 && <img src={img1} alt="" />}
                {id % 5 === 1 && <img src={img2} alt="" />}
                {id % 5 === 2 && <img src={img3} alt="" />}
                {id % 5 === 3 && <img src={img4} alt="" />}
                {id % 5 === 4 && <img src={img5} alt="" />}
            </div>
            <div className='content-body'>
                {data?.content}
            </div>
        </div>
    )
}