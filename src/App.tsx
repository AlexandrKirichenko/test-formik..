import React, {useState} from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import './App.css'
import Input from './components/Input'
import Layout from './components/Layout'
import {Login} from './pages/Login'
// import Registration from './pages/Registration'
import Button from './components/Button'
import {AuthProvider} from './context'

const INPUT_TEST_ERROR  = 'Error'



function App() {
    // const [inputValue, setInputValue] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameWasChanged, setNameWasChanged] =useState(false);
    const [passwordWasChanged, setPasswordWasChanged] =useState(false);
    const [nameError, setNameError] =useState('Email cant be empty');
    const [passwordError, setPasswordError] =useState('Email cant be empty');
    const AuthContextData = { name, setName,password, setPassword,nameWasChanged,setNameWasChanged,passwordWasChanged,
        setPasswordWasChanged,nameError, setNameError, passwordError,setPasswordError};
    return (
        <>
            <AuthProvider>
                <Layout>
                    <Router>
                        <Switch>
                            <Login/>
                            
                            {/*<Route exact path="/"><Login/></Route>*/}
                            {/*<Route path="/regisration"><Registration/></Route>*/}
                        </Switch>
                        
                        {/*<Registration/>*/}
                        {/*<Login/>*/}
                        {/*<Button type={"submit"} color={"primary"}> Login </Button>*/}
                    </Router>
                    {/*<Login />*/}
                    {/*<Input*/}
                    {/*    value={inputValue}*/}
                    {/*    type={"email"}*/}
                    {/*    id={"b34234"}*/}
                    {/*    name={"Password"}*/}
                    {/*    setInputValue={setInputValue}*/}
                    {/*    errorMessage={INPUT_TEST_ERROR}*/}
                    {/*    autoComplete={"off"}*/}
                    {/*    errorcolor={'errorcolor'}*/}
                    {/*/>*/}
                  
                    {/*<Button color={"secondary"}> Registration </Button>*/}
                    {/*<Avatar size={"large"} img={""} name={"Alex"}/>*/}
                    {/*<Avatar size={"medium"} img={""} name={"Alex"}/>*/}
                </Layout>
            </AuthProvider >
        </>
    );
}

export default App;