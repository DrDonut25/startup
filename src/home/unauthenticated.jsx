import React from 'react';

import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    
    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }
    
    async function createUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
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