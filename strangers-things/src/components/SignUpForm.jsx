import { useState } from "react";
// import { createAccount } from "../API";


export default function CreateNewAccountForm({ account, setAccount}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleAccount(e) {
        e.preventDefault();
        const APIData = await createAccount(username, password);
        if (APIData.success) {
                console.log("New Stranger", APIData.data.newAccount);

        const accountsList = [...accounts, APIData.data.newAccount];
        setAccount(accountList);

        setUsername("");
        setPassword("");
        } else {
            setError(APIData.error.message);
        }
        
    }

    return (
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
    );
}
