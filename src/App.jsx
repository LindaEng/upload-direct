import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleForm = async (e) => {
    e.preventDefault()
    
    // get pre-signed url from backend
    const response = await axios.get('http://localhost:5000/pre-signed-url', {
      params: {
        'file-name': file.name,
        'file-type': file.type
      }
    })

    const { url } = response.data
   
  }

  return (
    <>
      <div>
      <h1>Upload to S3</h1> 
      <form onSubmit={handleForm}>
        <input type="file" name="file" accept="image/*" onChange={handleFileChange}/>
        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  )
}

export default App