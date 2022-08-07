import React, { useState, useEffect } from "react";

import Title from "./Title";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

const postsArr = []

const App = () => {

    useEffect(() => {
        const data = fetchFromDataBase();
        setPosts(data)
    },[])

    const [posts, setPosts] = useState(postsArr);
    const [screen, setScreen] = useState('viewPhotos');

    const removePhoto = (photoRemoved) => {
        setPosts(posts.filter((post) => post !== photoRemoved));
    }

    const addPhoto = (postSubmitted) => {
        setPosts(posts.concat([postSubmitted]))
    }

    const navigate = () => {
        setScreen('addPhotos');
    }

    console.log(posts)

    return (
        <>
        <Title title = "Photowall" />
        <Route path='/' exact render={() => (
           <Photowall posts={posts} onRemovePhoto = {removePhoto} OnNavigate = {navigate}/>
    )} />
        <Route path='/AddPhoto' render = {({history}) => (
          <AddPhoto onAddPhoto = {(addedPost) => {
            addPhoto(addedPost)
            history.push('/')
          }} />
        )} />
        </>
    )
}

const fetchFromDataBase = () => {
    return [{
        id: 0,
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: 1,
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
        }, {
        id: 2,
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
}

export default App;