import React from 'react'

function FunctionClick() {

    function consoleLog()
    {
        console.log("Clicked")
    }

    return (
        <div>
            <button onClick = {consoleLog}>Click Me</button>
        </div>
    )
}

export default FunctionClick
