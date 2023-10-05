import react, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    const onGetUser = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users/current');
            setUser(response?.data);
            setIsAdmin(response?.data?.role === 'admin');
        } catch (err) {
            console.log(err);
        }
    }

    const onResetUser = () => {
        setUser(null);
        setIsAdmin(false);
    }

    useEffect(() => {
        ;(async () => {
            await onGetUser();
        })();
    }, []);
    console.log(user)
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
