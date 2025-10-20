import React from 'react';

export function Authenticated(props) {
    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <div>
            <button className="btn btn-secondary secondary_button" onClick={() => logout()}>Logout</button>
        </div>
    );
}