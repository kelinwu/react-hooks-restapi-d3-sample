import React, { useState } from 'react'

const CustomerForm = ({ addCustomer }) => {
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [noOfEmployee, setnoOfEmployee] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !contact || !phone || !location || !noOfEmployee) return
        const newCustomer = {
            name,
            contact,
            phone,
            location,
            noOfEmployee
        }
        addCustomer(newCustomer)
        // setName('')
        // setContact('')
        // setPhone('')
        // setLocation('')
        // setnoOfEmployee('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="enter name here"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="contact"
                    value={contact}
                    placeholder="enter contact here"
                    onChange={(e) => setContact(e.target.value)}
                />
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    placeholder="enter phone here"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    name="location"
                    value={location}
                    placeholder="enter location here"
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    type="text"
                    name="noOfEmployee"
                    value={noOfEmployee}
                    placeholder="enter noOfEmployee here"
                    onChange={(e) => setnoOfEmployee(e.target.value)}
                />
                <button disabled={!name || !contact || !phone || !location || !noOfEmployee}>Submit</button>
            </form>
        </>
    )
}

export default CustomerForm