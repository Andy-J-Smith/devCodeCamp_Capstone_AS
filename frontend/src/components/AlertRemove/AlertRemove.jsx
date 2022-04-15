import React, {useState} from 'react'
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";


const AlertRemove = (props) => {
    const [show, setShow] = useState(false);

    if (show) {
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Item Removed</Alert.Heading>
          <p>Bye!</p>
          </Alert>
        );
      }
      return <Button onClick={() => setShow(true)}>Show Alert</Button>;

}

export default AlertRemove