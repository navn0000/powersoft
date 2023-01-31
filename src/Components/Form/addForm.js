import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import "../../assests/css/form.css"
import { Card, Container, Form, Button } from 'react-bootstrap'
import { FormikProvider, useFormik } from 'formik'
import EditForm from './editForm';

function AddForm() {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 5);
    const [formData, setFormData] = useState([]);
    const [updateId, setUpdateId] = useState("");
    const [updatingData, setUpdatingData] = useState({
        id:"",
        user_name:"",
        email: "",
        mobile: ""
    })

    const dataUpdating = (id) => {
        console.log(id, "data")
        setUpdatingData(id)
        setUpdateId(id.id)
        formik.setFieldValue("user_name", id?.user_name)
        formik.setFieldValue("email", id?.email)
        formik.setFieldValue("mobile", id?.mobile)
        console.log(updateId, "update")
    }

    const [editEnable, setEditEnable] = useState(true)

    useEffect(()=>{
        console.log("updated")
    },[formData])
   
    const formik = useFormik({
        initialValues:{
            user_name:  "",
            email: "",
            mobile: "",
        },
        onSubmit: (values)=>{
            let updatingId = formData.map(item=>item.id)
            let currentValue = updatingData.id;
             let results = updatingId.find(value => value === currentValue)
             console.log(results, "results")
            if(results){
               let objIndex = formData.findIndex((obj => obj.id == results));
               formData[objIndex].user_name = values?.user_name;
               formData[objIndex].email = values?.email;
               formData[objIndex].mobile = values?.mobile;
               setEditEnable(true);
               console.log(formData)
            } else {
                const data ={
                    id: small_id,
                    user_name: values.user_name,
                    email: values.email,
                    mobile: values.mobile
                }
                console.log(data, "test")
                formData.push(data);
                setEditEnable(false)
                formik.handleReset();
            }
             
        }
    })
  return (
    <div className='mt-5'>
        <Container>     
        <Card>
        <Card.Body>
            <div className='form-feilds-inner'>
        <Form onSubmit={formik.handleSubmit}>
            <FormikProvider value={formik}>
                      <Form.Group className="mb-3">
        <Form.Control
         name="user_name"
        type="text" 
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.user_name}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
        name='email'
         type="email"
          placeholder="Email"
          onChange={formik.handleChange}
        value={formik.values.email}
          />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control name='mobile'
         type="text"
          placeholder="Mobile"
          onChange={formik.handleChange}
        value={formik.values.mobile}
          />
      </Form.Group>

      
    
      <Button variant="" type="submit" className='btn-save'>
        Save
      </Button>
      </FormikProvider>

    </Form>
    </div>
        </Card.Body>
      </Card>
      <div>
        <EditForm data={formData} dataUpdating={dataUpdating} editEnable={editEnable} />
      </div>
      </Container>
 
    </div>
  )
}

export default AddForm
