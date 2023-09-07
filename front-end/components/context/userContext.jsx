import react, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    const onGetUser = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users/current');
            setUser(response?.data);
        } catch (err) {
            console.log(err);
        }
    }
    console.log(user)
    useEffect(() => {
        onGetUser();
    }, []);

    const value = useMemo(() => ({
        user,
        onGetUser,
    }), [user]);

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    return useContext(UserContext);
}
