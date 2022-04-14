import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

const AccountInfo = (props) => {
    const [customers, setCustomers] = useState([]);
  
    const [country, setCountry] = useState([])
    const [street_address, setStreetAddress] = useState([])
    const [apartment, setApartment] = useState([])
    const [city, setCity] = useState([])
    const [st, setSt] = useState([])
    const [zip_code, setZipCode] = useState([])
    const [phone, setPhone] = useState([])
    const [user, token] = useAuth([]);
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  const custId = customers.map((item)=> {
    return item.id;
  }) 
  
  
    useEffect(() => {
        const fetchCustomer = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/api/customers/", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            setCustomers(response.data);
            console.log(response.data)
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchCustomer();
      }, [token]);
  
    async function updateAddress(id, updatedCust) {
      try {
        let response = await axios.put(
          `http://127.0.0.1:8000/api/customers/` + id +`/`,{
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setCustomers(updatedCust);
      } catch (error) {
        console.log(error.message);
        console.log(token)
      }
    }
  
    function handleUpdate(event) {
      event.preventDefault();
      let updatedCust = {
        country: country,
        street_address: street_address,
        apartment: apartment,
        city: city,
        st: st,
        zip_code: zip_code,
        phone: phone,
    }
    updateAddress(custId);
    console.log(updatedCust);
}
  
    return (
      <div>
        <div className="survey-modal">
          <Button variant="primary" onClick={handleShow}>
            Update Address
          </Button>
        <div className="modal-container">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Close</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <form className="survey-form" onSubmit={handleUpdate}>
                <label>Country:</label>
                <input className="survey-input"
                  type="text"
                  placeholder="country"
                  value={handleUpdate.country}
                  onChange={(event) => setCountry(event.target.value)}
                />
                <label>Street:</label>
                <input className="survey-input"
                  type="text"
                  placeholder="street_address"
                  value={handleUpdate.street_address}
                  onChange={(event) => setStreetAddress(event.target.value)}
                  
                />
                <label>Apartment:</label>
                <input className="survey-input"
                  type="text"
                  placeholder="apartment"
                  value={handleUpdate.apartment}
                  onChange={(event) => setApartment(event.target.value)}
                />
                <label>
                  City:
                </label>
                <input className="survey-input"
                  type="text"
                  placeholder="city"
                  value={handleUpdate.city}
                  onChange={(event) => setCity(event.target.value)}
                />
                  <label>State:</label>
                <input className="survey-input"
                  type="text"
                  placeholder="st"
                  value={handleUpdate.st}
                  onChange={(event) => setSt(event.target.value)}
                />
                <label>Zip Code:</label>
                <input className="survey-input"
                  type="text"
                  placeholder="zip_code"
                  value={handleUpdate.zip_code}
                  onChange={(event) => setZipCode(event.target.value)}
                />
                <label>Phone:</label>
                <input className="survey-input"
                  type="text"
                  placeholder="phone"
                  value={handleUpdate.phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <button type="submit"onClick={handleClose}>Update Address </button>
              </form>
            </Modal.Body>
         
          </Modal>
          </div>
        </div>
  
      </div>
    );
}

export default AccountInfo;