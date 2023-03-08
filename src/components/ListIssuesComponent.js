import React, {useEffect, useState} from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import UpdateState from "./UpdateState";

const ListIssuesComponent = () => {
    const [issues, setIssues] = useState([])

    useEffect(()=>{
        axios
            .get("http://localhost:8085/api/v1/issue")
            .then((response) =>{
            setIssues(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])
    return (
        <div className="container">
            <h2 className= "text-center">List of Bugs</h2>
            <table className="table table-bordered">
                <thead>
                <th scope="col"> Bug ID </th>
                <th scope="col"> Project Name </th>
                <th scope="col"> Tracker </th>
                <th scope="col"> Status </th>
                <th scope="col"> Subject </th>
                <th scope="col"> Assignee </th>
                <th scope="col"> Description </th>
                <th scope="col"> Publication Date </th>
                <th scope="col"> Action </th>
                </thead>
                <tbody>
                    {
                        issues.map(
                            issue =>
                                <tr key={issue.issueId}>
                                    <td scope="row" >{issue.issueId}</td>
                                    <td>{issue.projectName}</td>
                                    <td>{issue.issueType.issueTypeName}</td>
                                    <td>{issue.issueStatus.status}</td>
                                    <td>{issue.subject}</td>
                                    <td>{issue.user.userName}</td>
                                    <td>{issue.description}</td>
                                    <td>{issue.publicationDate}</td>
                                    <td>
                                        <td>
                                            <Button type="button"  variant="primary">History</Button>{' '}
                                        </td>
                                        <td>
                                            <UpdateState/>
                                        </td>

                                        </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ListIssuesComponent;