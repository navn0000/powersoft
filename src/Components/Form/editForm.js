import React, { useEffect, useState } from 'react'
import { Button, Container, Table, Form } from 'react-bootstrap'

function EditForm({data, dataUpdating, editEnable}) {
    const [dataForm, setData] = useState(data);
    const [disablebtn, setDisablebtn] = useState(false);
    const [enalbleDropdown, setEnableDropdown] = useState(editEnable);

    

    const editData = () => {
        setEnableDropdown(true)
    }

    const onSelectvalues =(updateItem)=>{
        console.log(updateItem, "selecting Key")
        const object = dataForm.find(obj => obj.id === updateItem);
        console.log(object, " set ID")
        dataUpdating({id: object.id, user_name: object.user_name, email: object.email, mobile: object.mobile})

    }
  return (
    <div>
      <Container>
        <div className='d-flex justify-content-end mt-3'>
        <Button disabled={disablebtn} onClick={editData}>Edit</Button>
        {
            enalbleDropdown && (
                <>
                <Form.Select
                 aria-label="Default select example"
                 onChange={(e)=>onSelectvalues(e.target.value)}
                 >
      {
        dataForm.map((item)=>{
            return(
                  <option key={item.id} value={item.id}>{item.user_name}</option>
            )
        })
      }
    
    </Form.Select>
                </>
            )
        }
        
        </div>
        
<Table striped bordered hover responsive>

<thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
    </tr>
</thead>

{data?.map((item) => {
    return (
        <>
<tbody key={item?.id}>

                <tr>
                    <td> {item?.user_name}</td>
                    <td>{item?.email}</td>
                    <td>{item?.mobile}</td>
                </tr>

            </tbody>


        </>
    )
})}

</Table>
         
      </Container>
    </div>
  )
}

export default EditForm
