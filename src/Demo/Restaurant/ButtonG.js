import React from 'react'
import {Button} from 'react-bootstrap'
export default function ButtonG(props) {
    return (
        <div>
               <Button variant="outline-success">{props.Button1}</Button>
                <Button variant="outline-danger">{props.Button2}</Button>
        </div>
    )
}
