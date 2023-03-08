import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
function UpdateState(){
    return(

        <div>
                <Link to="/ChangeState">
                    <Button type="button"  variant="danger">Change Stat</Button>{' '}
                </Link>
        </div>
    )
}
export default UpdateState;