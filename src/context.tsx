import React, {createContext, useContext, useState} from 'react'

interface IAuthContext {
    data: object;
    setValues(values : object):void;
}

type Props = {
    children:
        | React.ReactChild
        | React.ReactChild[];
}

type FuncType = (values : object) => void;

const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider = ({children}: Props) => {
    const [data, setData] = useState({})
    const setValues:FuncType = (values) => {
        setData(prevData => ({
            ...prevData,
            ...values,
        }));
    };
    return (
        <AuthContext.Provider value ={{data, setValues }}>
            {children}
        </AuthContext.Provider>
            );
        };
export const useData = () => useContext(AuthContext);