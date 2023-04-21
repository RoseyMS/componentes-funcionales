import Container from '@mui/material/Container';
import './App.css';
import FormSignUp from './components/FormSignUp';
import Typography from '@mui/material/Typography';


function App() {


  /* const handleSubmit = (valores) => {
    console.log("APP.JS", valores)
  } */

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align='center' >Formulario Registro</Typography>
      <FormSignUp />
    </Container>
  );
}

export default App;
