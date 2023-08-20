import { useState } from "react";
const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
// import { createAccount } from "../API";


export default function CreateNewAccountForm({ account, setAccount}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [error, setError] = useState(null);

    async function handleAccount(e) {
        e.preventDefault();
        console.log({ username, password });
       

        const APIData = await authenticate(username, password);
        if (APIData.success) {
                console.log("New Stranger", APIData.data.newAccount);

        const accountsList = [...users, APIData.data.newAccount];
        setAccount(accountList);

        setUsername("");
        setPassword("");
        } else {
            setError(APIData.error.message);
        }
    }

    async function authenticate() {
        const token = await fetch(`${BASE_URL}/users/register`, {
            method:"POST",
            body: {
                username,
                password
            }
        });
        const result = await token.json();
        console.log(result)
        setToken(result.token);
        return result.token;
    }

    return (
        <div>
        {token && <h1>You are a stranger! {token}</h1>}
        <div className="form">
        <form onSubmit={handleAccount}>
                {error && <p>{error}</p>}
                <input
                value={username}
                type="text"
                name="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                value={password}
                type="text"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                />
            <button type="submit">Submit</button>
        </form>
        </div>
        </div>
    );
}
