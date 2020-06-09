import React from 'react'
import FlexDiv from './FlexDiv'

const Customer = ({ customer, index, completeCustomer, deleteCustomer }) => {
    return (
      <FlexDiv container
        key={index}
        style={
          {
            textDecoration: customer.sentNotification ? 'line-through' : "",
            paddingLeft: '15%',
            paddingRight: '15%',
            paddingBottom: '10px'
          }
        }>
        <FlexDiv>[{index}] {customer.name}</FlexDiv>
        <FlexDiv >{customer.contact}</FlexDiv>
        <FlexDiv>{customer.phone}</FlexDiv>
        <FlexDiv>{customer.location}</FlexDiv>
        <FlexDiv>{customer.noOfEmployee}</FlexDiv>
        <FlexDiv>
          <button
            onClick={() => completeCustomer(index)}
            style={
              { backgroundColor: customer.willRain ? 'green' : '' }
            }
            disabled={customer.willRain ? false : true}
          >
            Click to Send Notification...
              </button>
        </FlexDiv>
        <FlexDiv justify='flex-end'>
          <button id="submit-btn" onClick={() => deleteCustomer(index)} >x</button>
        </FlexDiv>
      </FlexDiv>
    )
  }

  export default Customer