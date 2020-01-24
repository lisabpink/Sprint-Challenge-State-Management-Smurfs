import React from "react";
import "./App.css";
import axios from "axios";
import Form from './Form';
import SmurfList from './SmurfList';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const App = () => {
  axios 
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('get from App.js', res)
    })
    return (
      <div className="App">
         <Paper className='paper'>
        <Typography variant='h4'>Create your very own Smurf Village!</Typography>
        <br></br>
        <Form />
        <SmurfList />
        </Paper>
      </div>
    );
  }


export default App;
