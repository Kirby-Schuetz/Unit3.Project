const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
import {useState} from 'react'

export default function Authenticate({token, setToken}) {
    const[successMessage, setSuccessMessage] = useState("")
    const [error, setError] = useState("")

    async function handleClick(){
        try{
            const response = await fetch(`${BASE_URL}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const result= await response.json()
            console.log(result)
            setSuccessMessage(`Not only is ${result.data.username} ${result.message}, they also love to collect things.`)
            console.log(successMessage)
        
            } catch(error) {
            setError(error.message);
        }
    } return (
        <div>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error.message}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
        </div>
    )
} 