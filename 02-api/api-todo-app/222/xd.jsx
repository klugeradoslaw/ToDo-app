import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {

    const [alert, setAlert] = React.useState(false);

    function warningHandler() {
        if (alert === true) {
            setAlert(false)
        } else if (alert === false) {
            setAlert(true);
        }
    }

    return (

        <div>
            {alert === true ? (

                <button onClick={warningHandler}>Delete</button>

            ) : (
                <div>
                    <div data-testid="alert" id="alert">
                        <h2>Are you sure?</h2>
                        <p>These changes can't be reverted!</p>
                        <button onClick={warningHandler}>Proceed</button>
                    </div>
                    <button onClick={warningHandler}>Delete</button>
                </div>
            )}
        </div>
    );
}