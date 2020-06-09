import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from "./customD3BarChart";
import FlexDiv from "./FlexDiv";
import Customer from "./Customer";
import CustomerForm from './CustomerForm';

const initstate = [
  {
    name: 'Lorem',
    contact: 'Bill G',
    phone: '416-123-1234',
    location: 'toronto',
    noOfEmployee: 80,
    willRain: false,
    sentNotification: false
  },
  {
    name: 'Impsum',
    contact: 'John D', phone: '416-345-1235', location: 'north york',
    noOfEmployee: 20, willRain: true, sentNotification: false
  },
  {
    name: 'Aqua', contact: 'Mark Z', phone: '416-675-1236', location: 'markham',
    noOfEmployee: 14, willRain: false, sentNotification: false
  },
  {
    name: 'Deliberum', contact: 'Dom Z', phone: '416-543-1237', location: 'richmondhill',
    noOfEmployee: 70, willRain: true, sentNotification: false
  }
]

const App = () => {

  const [customers, setCustomers] = useState(initstate)

  // useEffect(() => {
  //   getCustomersFromAPI();
  // }, [])

  // const getCustomersFromAPI = () => {
  //   // call api to get customers data
  //   // setState
  //   // setCustomers(customers)
  // }

  // useEffect(() => {
  //   updateWeather()
  // }, [])

  // const updateWeather = async () => {
  //   try {
  //     // const url = 'api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={your api key} '
  //     // const res = await axios.get(url)
  //     // customerDataUpdate(customers, 'res.data')
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // }

  // const customerDataUpdate = (custData, resData) => {
  //   // data process
  //   // todo

  //   // update state
  //   // setCustomers(updatedCustomers)
  // }

  const randomWeather = () => {
    const d = new Date()
    return d % 2 === 1 ? true : false
  }

  const addCustomer = customer => {
    const { name, contact, phone, location, noOfEmployee } = customer
    
    const _new = {
      name,
      contact,
      phone,
      location,
      noOfEmployee,
      willRain: randomWeather()
    }
    let newCustomer = [...customers, _new]
    setCustomers(newCustomer)
  }

  const deleteCustomer = index => {
    const newCustomer = [...customers]
    newCustomer.splice(index, 1)
    setCustomers(newCustomer)
  }

  const completeCustomer = index => {
    const newCustomer = [...customers]
    newCustomer[index].sentNotification = true
    setCustomers(newCustomer)
  }

  return (
    <div className="App">
      {/* react header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* react d3 component */}
      <FlexDiv justify="center" style={{ paddingTop: '30px', paddingRight: '250px' }}>
        <BarChart data={customers} />
      </FlexDiv>

      {/* react parent-child component */}
      {customers.map((customer, index) => (
        <Customer
          key={index}
          index={index}
          customer={customer}
          completeCustomer={completeCustomer}
          deleteCustomer={deleteCustomer}
        />
      ))}
    <br></br>
      <div>
        {/* react component */}
        <CustomerForm addCustomer={addCustomer} />
      </div>
    </div>
  );
}

export default App;
