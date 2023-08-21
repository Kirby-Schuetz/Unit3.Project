import { useState } from 'react';
import { TextField, Button, Grid, Card } from '@mui/material';


const LogInPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
console.log(props)
    // const paperStyle = {padding :20,height:'70vh',width:280, margin:"20px auto"};
    // const btnstyle = {margin:'8px 0'};

    function handleLogin() {
        
      setLoggedIn(true);
    }

    return (
        <form>
            <Card elevation={0}>
            <Grid align='center'>
        <h2>Stranger Sign In:</h2>
        </Grid>
        <TextField
        label='Username'
        placeholder='Enter username'
        fullWidth
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label='Password'
        placeholder='Enter password'
        type='password'
        fullWidth
        required
        autoComplete='off'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type='submit'
        color='primary'
        variant="contained"
        fullWidth
        onClick={handleLogin}
      >
        Sign in
      </Button>
      </Card>
      </form>
    )
};
export default LogInPage;

