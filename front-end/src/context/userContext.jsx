import react, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-native';
import {baseUrl} from "../config";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    const onGetUser = async () => {
        try {
            const response = await axios.get(`${baseUrl}/users/current`);
            setUser(response?.data);
            setIsAdmin(response?.data?.role === 'admin');
        } catch (err) {
            console.log(err);
            navigate('/');
        }
    }

    const onResetUser = () => {
        setUser(null);
        setIsAdmin(false);
        navigate('/');
    }

    useEffect(() => {
        ;(async () => {
            await onGetUser();
        })();
    }, []);

    const value = useMemo(() => ({
        user,
        isAdmin,
        onGetUser,
        onResetUser
    }), [user, isAdmin]);

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    return useContext(UserContext);
}
