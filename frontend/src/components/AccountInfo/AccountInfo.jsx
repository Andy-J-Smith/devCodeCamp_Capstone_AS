import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

const AccountInfo = (props) => {
    const [customers, setCustomers] = useState([]);
    const [country, setCountry] = useState(customers.country)
    const [street_address, setStreetAddress] = useState(customers.street_address)
    const [apartment, setApartment] = useState(customers.apartment)
    const [city, setCity] = useState(customers.city)
    const [st, setSt] = useState(customers.st)
    const [zip_code, setZipCode] = useState(customers.zip_code)
    const [phone, setPhone] = useState(customers.phone)
    const [user, token] = useAuth();
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchCustomer = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/api/customers/", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            setCustomers(response.data);
            console.log(customers)
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchCustomer();
      }, [token]);
  
    async function updateAddress(id) {
      try {
        let response = await axios.put(
          `http://127.0.0.1:8000/api/customers/${id}/`,
          
        
          
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setCustomers();
      } catch (error) {
        console.log(error.message);
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
    updateAddress(user.id);
    console.log(user.id);
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
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                />
                <label>Street:</label>
                <input className="survey-input"
                  type="text"
                  placeholder="street_address"
                  value={handleUpdate.street_address}
                  onChange={(event) => setStreetAddress(event.target.value)}
                  required
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