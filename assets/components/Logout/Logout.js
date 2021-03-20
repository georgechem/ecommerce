import React from 'react';
import {useEffect} from 'react';

import {url_logout} from "../../config";
import {fetchGetConfig} from "../../config";

const Logout = (props) => {
    useEffect(() =>{
        fetch(url_logout, fetchGetConfig)
            .then(res=>res.json())
            .then(result=>{
                if(result.status === 'logged-out')
                {
                    props.setIsLogged(false);
                }

            })
            .catch(err=>{
                console.log(err);
            })
    },[]);

    return (
        <>
            logout here
        </>
    );
}
export default Logout;
