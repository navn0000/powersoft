import React, { Fragment, useState } from 'react'
import { v4 as uuid } from 'uuid';
import "../../assests/css/style.css"
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap'
import { FormikProvider, useFormik } from "formik"
import { mainValidation } from '../../validations/mainValidation';

function RowTaskVone() {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 5)
    const [listItems, setListItems] = useState([]);
    const [showList, setShowList] = useState([]);
    const [noResultText, setNoResultText] = useState(false)
    const [noAddData, setNoAddData] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            pan: ""
        },
        validationSchema: mainValidation,
        onSubmit: (values) => {
            const data = {
                id: small_id,
                name: values.name,
                email: values.email,
                mobile: values.mobile,
                pan: values.pan
            }
            console.log(data)
            listItems.push(data)
            formik.handleReset();
            setShowList([]);
        }
    })

    const ShowItems = () => {
        if (listItems?.length === 0) {
            setNoResultText(true)
            setTimeout(() => {
                setNoResultText(false)
            }, 2000)
        } else if (listItems?.length === showList.length) {
            setNoAddData(true)
            setTimeout(() => {
                setNoAddData(false)
            }, 1000)
        }
        else {
            setShowList(listItems)
            setNoResultText(false)
        }
    }
    return (
        <Fragment>
            <Container>
                <Row>
                    <Card className='mt-5 form-outer'>
                        <Card.Body className='form-inner'>
                            <Form onSubmit={formik.handleSubmit}>
                                <FormikProvider value={formik}>
                                    <Row className=''>
                                        <Col sm={12} md={11}>
                                            <Row>
                                                <Col sm={6} md={3}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control 
                                                            className='adding-data-field'
                                                            name="name"
                                                            type="text"
                                                            placeholder="Name"
                                                            value={formik.values.name}
                                                            onChange={formik.handleChange}
                                                            isInvalid={!!formik.touched.name && !!formik.errors.name}
                                                        />
                                                    </Form.Group>
                                                    <p className='error-text'>{formik.errors.name}</p>

                                                </Col>
                                                <Col sm={6} md={3}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control 
                                                        className='adding-data-field'
                                                            name="email"
                                                            type="email"
                                                            placeholder="Email"
                                                            value={formik.values.email}
                                                            onChange={formik.handleChange}
                                                            isInvalid={!!formik.touched.email && !!formik.errors.email}

                                                        />

                                                    </Form.Group>
                                                    <p className='error-text'>{formik.errors.email}</p>
                                                </Col>
                                                <Col sm={6} md={3}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control
                                                        className='adding-data-field'
                                                            name="mobile"
                                                            type="text"
                                                            placeholder="Mobile"
                                                            value={formik.values.mobile}
                                                            onChange={formik.handleChange}
                                                            isInvalid={!!formik.touched.mobile && !!formik.errors.mobile}

                                                        />
                                                    </Form.Group>
                                                    <p className='error-text'>{formik.errors.mobile}</p>

                                                </Col>
                                                <Col sm={6} md={3}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control
                                                        className='adding-data-field'
                                                            name="pan"
                                                            type="text"
                                                            placeholder="Pan"
                                                            value={formik.values.pan}
                                                            onChange={formik.handleChange}
                                                            isInvalid={!!formik.touched.pan && !!formik.errors.pan}

                                                        />
                                                    </Form.Group>
                                                    <p className='error-text'>{formik.errors.pan}</p>

                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col sm={12} md={1}>
                                            <Row>
                                                <Col sm={12} md={12}>

                                                    <Button variant="" className='add-btn mb-2' type="submit">
                                                        Add Row
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>


                                    </Row>
                                </FormikProvider>
                            </Form>
                            {
                                listItems.map((item, index) => {

                                    return (
                                        <div key={item?.id}>
                                            <Row>
                                                <Col md={11}>
                                                    <Row className="mb-4">
                                                        <Col md={3} sm={6} xs={6}>
                                                            <Form.Control
                                                                disabled
                                                                className='added-data'
                                                                type="text"
                                                                value={item.name}
                                                            />
                                                        </Col>

                                                        <Col md={3} sm={6} xs={6}>
                                                            <Form.Control
                                                                disabled
                                                                className='added-data'
                                                                type="email"
                                                                value={item.email}
                                                            />

                                                        </Col>
                                                        <Col md={3} sm={6} xs={6}>
                                                            <Form.Control
                                                                disabled
                                                                className='added-data'
                                                                type="text"
                                                                value={item.mobile}
                                                            />

                                                        </Col>
                                                        <Col md={3} sm={6} xs={6}>
                                                            <Form.Control
                                                                disabled
                                                                className='added-data'
                                                                type="text"
                                                                value={item.pan}
                                                            />

                                                        </Col>



                                                    </Row>
                                                </Col>
                                                <Col md={1}></Col>
                                            </Row>
                                        </div>
                                    )
                                }
                                )

                            }
                            <Row>
                                <Button className='save-btn' onClick={ShowItems}>Save</Button>
                            </Row>
                            <Row>

                                {
                                    noAddData && (
                                        <p className='no-data-text'>Please add new data to save</p>
                                    )
                                }

                                {
                                    listItems.length === 0 ? (
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
                                                showList.length !== 0 && (
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

                                                            {showList.map((item) => {
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
                        </Card.Body>
                    </Card>
                </Row>
            </Container>

        </Fragment>
    )
}

export default RowTaskVone
