import React from "react";
import IssueAddComponent from "./IssueAddComponent";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
function FooterComponent(){
    return(
        <div>
            <footer className="footer">
                <MDBFooter bgColor='warning' className='text-center text-lg-start text-muted'>
                    <section className='d-flex justify-content-center justify-content-lg-between '>

                    </section>

                    <section className=''>
                        <MDBContainer className='text-center text-md-start mt-2'>
                            <MDBRow className='mt-1'>
                                <MDBCol md="2" lg="3" xl="3" className='mx-auto mb-3'>
                                    <h6 className='text-uppercase fw-bold mb-3'>
                                        <MDBIcon icon="gem" className="me-2" />
                                        Entgra
                                    </h6>
                                </MDBCol>

                                <MDBCol md="2" lg="3" xl="3" className='mx-auto mb-3'>
                                    <h6 className='text-uppercase fw-bold mb-3'>About Us</h6>

                                </MDBCol>

                                <MDBCol md="2" lg="3" xl="3" className='mx-auto mb-3'>
                                    <h6 className='text-uppercase fw-bold mb-3'>FQA</h6>

                                </MDBCol>

                                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-md-0 mb-3'>
                                    <h6 className='text-uppercase fw-bold mb-3'>Contact Us</h6>
                                    <p>
                                        <MDBIcon icon="home" className="me-2" />
                                        Entgra.io@gmail.com
                                    </p>

                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>

                    <div className='text-center p-0' style={{ backgroundColor: 'rgba(0,0,255,0.1)' }}>
                        © 2023 Copyright:
                        <a className='text-reset fw-bold' href='https://education5033.wordpress.com'>
                            DMN Sangeeth
                        </a>
                    </div>
                </MDBFooter>
            </footer>
        </div>
    )
}
export default FooterComponent;