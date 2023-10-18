import react, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-native';
import {baseUrl} from "../config";

export const VideoContext = createContext();

export const VideoProvider = (props) => {
    const [currentVideoParams, setCurrentVideoParams] = useState(null);

    const onSetCurrentVideoParams = ({
                                         uri,
                                         title
                                     }) => {
        setCurrentVideoParams({
            uri,
            title
        })
    }

    const onResetCurrentVideoParams = () => {
        setCurrentVideoParams(null);
    }

    const value = useMemo(() => ({
        currentVideoParams,
        onSetCurrentVideoParams,
        onResetCurrentVideoParams
    }), [currentVideoParams]);

    return (
        <VideoContext.Provider value={value}>
            {props.children}
        </VideoContext.Provider>
    );
}

export const useVideoContext = () => {
    return useContext(VideoContext);
}
