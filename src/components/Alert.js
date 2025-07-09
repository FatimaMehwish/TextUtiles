import React from 'react'

function Alert(props) {
    return (
        <>
            <div className={`alert alert alert-${props.alert.Type} fade show`} role='alert'>
                <strong>{props.alert.Type}</strong> {props.alert.Message}
            </div>
        </>
    )
}
export default Alert
