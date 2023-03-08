import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, Row, Col, Button} from "reactstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const IssueAddComponent = () => {
    let navigate = useNavigate();
    const [modal, setModel] = useState(false);
    const [issue , setIssue] = useState({
        // issueId:"",
        projectName:"",
        issueTypeId:"",
        subject:"",
        description:"",
        statusId:"",
        userId:"",
        publicationDate:""
    });
    const {projectName,issueTypeId,subject,description,statusId,userId,publicationDate} = issue;
    console.log(issue);
    const onSubmit = async (e) => {
        console.log("data", issue)
        e.preventDefault();
        await axios.post("http://localhost:8085/api/v1/issue/add-issue",issue)
        //navigate("/");
    };
    return (
        <div>
            <Modal
                size='lg'
                isOpen={modal}
                toggle={() => setModel(!modal)}
            >
                <ModalHeader
                    toggle={() => setModel(!modal)}
                >
                    Popup
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <Row>
                            <Col lg={12}>
                                <div>
                                    <div>
                                        <form>
                                            <div className="form-group row">
                                                <label htmlFor="inputPassword"
                                                       className="col-sm-2 col-form-label row-cols-sm-auto ">Project Name</label>
                                                <div className="col-sm-5">
                                                    <input value={projectName}  className="form-control" id="InputProjectName"
                                                           placeholder="Project Name" onChange={(e) => setIssue({ ...issue, projectName: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="form-row align-items-center">
                                                <div className="col-auto my-1 ">
                                                    <label htmlFor="inputPassword"
                                                           className="col-sm-2 col-form-label row-cols-sm-auto ">Issue
                                                        Type</label>
                                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"
                                                            value={issueTypeId} onChange={(e) => setIssue({ ...issue, issueTypeId: e.target.value })}>
                                                        <option selected>Choose...</option>
                                                        <option value="1">Bug</option>
                                                        <option value="2">Question</option>
                                                        <option value="3">Improvement</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="inputPassword"
                                                       className="col-sm-2 col-form-label row-cols-sm-auto ">Subject</label>
                                                <div className="col-sm-5">
                                                    <input  className="form-control"
                                                            value={subject}
                                                            onChange={(e) => setIssue({ ...issue, subject: e.target.value })}
                                                            id="inputSubject"
                                                           placeholder="Subject"
                                                    />
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="form-group row">
                                                <label htmlFor="inputPassword"
                                                       className="col-sm-2 col-form-label row-cols-sm-auto ">Description</label>
                                                <div className="col-sm-5">
                                                    <input value={description}  className="form-control" id="inputDescription"
                                                           placeholder="Description" onChange={(e) => setIssue({ ...issue, description: e.target.value })}/>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="form-row align-items-center">
                                                <div className="col-auto my-1 ">
                                                    <label htmlFor="inputStatus"
                                                           className="col-sm-2 col-form-label row-cols-sm-auto ">Status
                                                        </label>
                                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"
                                                            value={statusId} onChange={(e) => setIssue({ ...issue, statusId: e.target.value })}>
                                                        <option selected>Choose...</option>
                                                        <option value="1">Open</option>
                                                        <option value="2">In-Progress</option>
                                                        <option value="3">Waiting on client</option>
                                                        <option value="4">Resolved</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="form-row align-items-center">
                                                <div className="col-auto my-1 ">
                                                    <label htmlFor="inputAssignee"
                                                           className="col-sm-2 col-form-label row-cols-sm-auto ">Assignee
                                                    </label>
                                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"
                                                            value={userId} onChange={(e) => setIssue({ ...issue, userId: e.target.value })}>
                                                        <option selected>Choose...</option>
                                                        <option value="1">Sangeeth</option>
                                                        <option value="2">Nishan</option>
                                                        <option value="3">Kamal</option>
                                                        <option value="4">Asitha</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="form-group row">
                                                <label htmlFor="inputPassword"
                                                       className="col-sm-2 col-form-label row-cols-sm-auto ">Start Date</label>
                                                <div className="col-sm-5">
                                                    <input value={publicationDate}  type="date" className="form-control" id="inputdate"
                                                           placeholder="Start date" onChange={(e) => setIssue({ ...issue, publicationDate: e.target.value })}/>
                                                </div>
                                            </div>
                                            <br/>


                                            <div className="form-group row">
                                                <div className="col-sm-10">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </ModalBody>
            </Modal>
            <div>
                <ul>
                    <tr style={{float: 'right' }}>
                        <Button variant="contained"  onClick={() => setModel(true)}>Creat Issue</Button>
                    </tr>
                </ul>

            </div>
        </div>
    )
}
export default IssueAddComponent;