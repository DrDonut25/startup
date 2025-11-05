import React from 'react';

import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    
    async function loginUser() {
        loginOrCreate('/api/auth/login');
    }
    
    async function createUser() {
        loginOrCreate('/api/auth/create');
    }
    
    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ username: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`Error: ${body.msg}`);
        }
    }

    return (
        <>
            <form>
                <div>
                    <span>Username </span>
                    <input type ="text" onChange={(e) => setUserName(e.target.value)} placeholder="myUsername"/>
                </div>
                <div>
                    <span>Password </span>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
                    <button className="btn btn-secondary secondary_button" onClick={() => createUser()} disabled={!userName || !password}>Sign Up</button>
                </div>
            </form>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    );
}