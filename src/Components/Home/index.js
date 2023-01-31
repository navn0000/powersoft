import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import FormContainer from '../Form'
import RowTaskVone from './rowTaskVone'
import RowTaskVtwo from './rowTaskVtwo'

function HomePage() {
  return (
    <div>
       <Tabs
      defaultActiveKey="rowtask"
      id="uncontrolled-tab-example"
      className=""
    >
      <Tab eventKey="rowtask" title="Row Task Version One" className='tab-heading'>
        <RowTaskVone />
      </Tab>
      <Tab eventKey="rowtasktwo" title="Row Task Version Two" className='tab-heading'>
        <RowTaskVtwo />
      </Tab>
      <Tab eventKey="reacttask" title="React Task" className='tab-heading'>
        <FormContainer />
      </Tab>
    </Tabs>
    </div>
  )
}

export default HomePage
