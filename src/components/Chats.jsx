import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import {ChatEngine} from "react-chat-engine";

import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import Navbar from "./Navbar";
import Spinner from "./Spinner";

const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpeg", {type: 'image/jpeg'})
    }

    useEffect(() => {
        if(!user){
            history.push('/home');

            return;
        }

        axios.get('https://api.chatengine.io/users/me',{
            headers: {
                "project-id": process.env.REACT_APP_PROJECT_ID,
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user.email);
                formdata.append('username', user.email);
                formdata.append('secret', user.uid);

                getFile(user.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name);

                        axios.post('https://api.chatengine.io/users',
                            formdata,
                            { headers: {"private-key": process.env.REACT_APP_PRIVATE_KEY} }
                            )
                            .then(() => setLoading(false))
                            .catch((error) => console.log(error))

                })
            })
    }, [user, history]);

    if(!user || loading) return <Spinner /> ;


    return(
        <div className="chats-page">
            <Navbar />
            <ChatEngine
                height="calc(100vh - 66px)"
                projectID={process.env.REACT_APP_PROJECT_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </div>


    );
}

export default Chats;