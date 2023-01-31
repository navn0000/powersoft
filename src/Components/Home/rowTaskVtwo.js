import React, { Fragment, useState } from 'react'
import { v4 as uuid } from 'uuid';
import "../../assests/css/style.css"
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap'
import { FormikProvider, useFormik, yupToFormErrors } from "formik"
import { mainValidation } from '../../validations/mainValidation';

function RowTaskVtwo() {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 5);
    const [formFields, setFormFields] = useState([
        { name: "", email: "", mobile: "", pan: "" },
    ]);
    const [viewList, setViewList] = useState([]);
    const [noResultText, setNoResultText] = useState(false)
    const [noAddData, setNoAddData] = useState(false)
    const [errorMsg, setErrosMsg] = useState({
        name: false,
        email: false,
        mobile: false,
        pan: false
    })
   
   
    const handelFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);

    }

    const addMoreFields = () => {
        let object = {
            name: "",
            email: "",
            mobile: "",
            pan: ""
        }
        setFormFields([...formFields, object])

    }

    // const removeFields = (index) => {
    //     let data = [...formFields];
    //     data.splice(index, 1)
    //     setFormFields(data)
    // }

    
   const formValidation = ()=>{

   }

    const submit = (e) => {
        e.preventDefault();
        formValidation(formFields)
        if(viewList == 0){
            setNoResultText(true)
            setTimeout(()=>{
                setNoResultText(false)
            }, 1000)
        } else if(viewList.length === formFields.length) {
            setNoAddData(true)
            setTimeout(()=>{
                setNoAddData(false)
            }, 1000)
        }
        else {
            setNoAddData(false)
            setNoResultText(false)
        }
    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Card className='mt-5 form-outer'>
                        <Card.Body className='form-inner'>
                            <form onSubmit={submit}>
                                <Row>
                                    {

                                        formFields.map((form, index) => {
                                            return (

                                                <Col sm={12} md={11} key={index}>
                                                    <Row>
                                                        <Col sm={6} md={3}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Control
                                                                    className='adding-data-field'
                                                                    name="name"
                                                                    placeholder="Name"
                                                                    onChange={(event) => handelFormChange(event, index)}
                                                                    value={form.value}
                                                                />

                                                            </Form.Group>
                                                          {form.nameCheck}
                                                        </Col>
                                                        <Col sm={6} md={3}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Control
                                                                    className='adding-data-field'
                                                                    name="email"
                                                                    placeholder="Email"
                                                                    onChange={(event) => handelFormChange(event, index)}
                                                                    value={form.value}

                                                                />

                                                            </Form.Group>
                                                            {form.emailCheck}

                                                        </Col>
                                                        <Col sm={6} md={3}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Control
                                                                    className='adding-data-field'
                                                                    name="mobile"
                                                                    placeholder="Mobile"
                                                                    onChange={(event) => handelFormChange(event, index)}
                                                                    value={form.value}
                                                                />
                                                            </Form.Group>
                                                            {form.mobileCheck}

                                                        </Col>
                                                        <Col sm={6} md={3}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Control
                                                                    className='adding-data-field'
                                                                    name="pan"
                                                                    placeholder="Pan"
                                                                    onChange={(event) => handelFormChange(event, index)}
                                                                    value={form.value}
                                                                />
                                                            </Form.Group>
                                                            {form.panCheck}

                                                        </Col>
                                                        {/* <Col sm={12} md={2}>
                                                            <Button onClick={() => removeFields(index)}>Remove</Button>
                                                        </Col> */}


                                                    </Row>
                                                    <hr  className='m-1'/>
                                                </Col>

                                            )

                                        })
                                    }
                                    <Col sm={12} md={1}>
                                        <Row>
                                            <Col sm={12} md={12}>
                                                <Button variant="" className='add-btn mb-2' onClick={addMoreFields}>
                                                    Add Row
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </form>

                          


                            <Row>
                                <Button className='save-btn' onClick={submit}>Save</Button>
                            </Row>
                            <Row>
                            </Row>
                        </Card.Body>

                    </Card>
                </Row>
                <Row>

{
    noAddData && (
        <p className='no-data-text'>Please add new data to save</p>
    )
}

{
    viewList.length === 0 ? (
        <>
            {
                noResultText && (
                    <p className='no-data-text'>No data to Save</p>
                )
            }
        </>
    ) : (
        <>
            {
                viewList?.length !== 0 && (
                    <div className='tabel-view'>
                        <h6>Saved List</h6>
                        <Table striped bordered hover responsive>

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Pan</th>
                                    <th>Mobile</th>
                                </tr>
                            </thead>

                            {viewList.map((item) => {
                                return (
                                    <>


                                        <tbody key={item?.id}>
                                            <tr>
                                                <td> {item?.name}</td>
                                                <td>{item?.email}</td>
                                                <td>{item?.pan}</td>
                                                <td>{item?.mobile}</td>
                                            </tr>

                                        </tbody>


                                    </>
                                )
                            })}

                        </Table>
                    </ div>
                )
            }

        </>

    )


}




</Row>
            </Container>

        </Fragment>
    )
}

export default RowTaskVtwo
