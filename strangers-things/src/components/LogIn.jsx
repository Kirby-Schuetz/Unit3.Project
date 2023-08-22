import { useState } from "react";
import { TextField, Button, Grid, Card } from "@mui/material";
import { logIn } from "../API/index";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const paperStyle = {padding :20,height:'70vh',width:280, margin:"20px auto"};
  // const btnstyle = {margin:'8px 0'};

  async function handleLogin() {
    event.preventDefault();
    const result = await logIn(username, password);
    console.log(username);
    console.log(password);

    alert("You are logged into Strangers Things.");
    console.log(JSON.stringify(result));
    navigate("/AllPosts");
  }

  return (
    <form>
      <Card elevation={0}>
        <Grid align="center">
          <h2>Stranger Sign In:</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={async () => {
            await handleLogin();
          }}
        >
          Sign in
        </Button>
      </Card>
    </form>
  );
};
export default LogInPage;
