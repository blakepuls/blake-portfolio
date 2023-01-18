'use client'

import { Dispatch, SetStateAction, useState, useEffect, CSSProperties } from 'react';
import style from './style.module.scss';

export default function LoginForm(props: {setToken: Dispatch<SetStateAction<string>>}) {
    const [userExists, setUserExists] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    useEffect(() => {
        onRefresh();
    }, []);

    // Check if user exists, then check if token stored in local storage is valid
    const onRefresh = async () => {
        const user = await fetch('/api/user/');
        setUserExists(user.status === 200);

        //No user exists, so no need to check token
        if(user.status != 200) 
            return;
        
        const token = localStorage.getItem('token');
        if(!token) 
            return

        const res = await fetch('/api/user/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token
            })
        });

        if(res.status != 200) {
            props.setToken('');
            localStorage.removeItem('token');
            return
        }

        props.setToken(token);
    }
    
    // Create user if it doesn't exist, then login
    const createUser = async () => {
        const res = await fetch('/api/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        if(res.status === 201) 
            loginUser();
    };

    const loginUser = async () => {
        const res = await fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        // Successful login
        if(res.status == 200) {
            const data = await res.json();
            props.setToken(data.token);
            localStorage.setItem('token', data.token);
            return
        }

        // Login failed
        setLoginFailed(true);
        setTimeout(() => {
            setLoginFailed(false);
        }, 1000);
    };

    // Inline style for login button if login failed
    const loginButtonStyle: CSSProperties | undefined = !loginFailed ? undefined : {
        backgroundColor: '#FF5555',
    }
    
    return (
        <div className= {style['login-form']}>
            {userExists ? <span>Please Login</span> : <span>Register Account</span>}
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            {userExists ? <button style={loginButtonStyle} onClick={loginUser}>Login</button> : <button onClick={createUser}>Register</button>}
        </div>
    )
}