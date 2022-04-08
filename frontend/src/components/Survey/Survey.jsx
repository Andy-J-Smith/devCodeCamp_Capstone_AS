import axios from 'axios'
import React, {useState, useEffect} from 'react'


const Survey = (props) => {
  const [newSurvey, setNewSurvey] = useState('')
  const [survey, setSurvey] = useState('')

  useEffect(() => {
    getAllSurveys();
  }, []);

  async function getAllSurveys(){
      let response = await axios.get("http://127.0.0.1:8000/api/surveys/");
      setSurvey(response.data);
      console.log(response.data)

  }
 
  

  async function createSurvey(newSurvey) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/surveys/",
      newSurvey
    );
    if (response.status === 201) {
      await getAllSurveys();
    }
  }

  
  
  
    return (
    <div>Survey</div>
  )
}

export default Survey