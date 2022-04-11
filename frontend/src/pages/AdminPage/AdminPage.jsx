import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { renderMatches } from 'react-router-dom';
import Survey from '../../components/Survey/Survey';


const AdminPage = (props) => {

  const [survey, setSurvey] = useState('')

  useEffect(() => {
    getAllSurveys();
  }, []);

  async function getAllSurveys(){
      let response = await axios.get("http://127.0.0.1:8000/api/surveys/");
      setSurvey(response.data);
      console.log(response.data)

  }

  return (
    <div>
        <p>Admin Page</p>
        <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Boat or land</th>
          <th>Frequency</th>
          <th>Species</th>
          <th>Style</th>
          <th>Water Type</th>
        </tr>
      </thead>
      <tbody>
        {survey && survey.map((survey, index) => {
          return (
            <tr key={index}>
              <td>{index +1}</td>
              <td>{survey.boat_land}</td>
              <td>{survey.frequency}</td>
              <td>{survey.species}</td>
              <td>{survey.style}</td>
              <td>{survey.water_type}</td>
             
       
            </tr>
          )
        })}
      </tbody>
    </table>
       

    </div>
  )
}

export default AdminPage