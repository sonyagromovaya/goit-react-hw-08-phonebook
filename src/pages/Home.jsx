import { useNavigate } from 'react-router-dom';
//Material UI
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

const Home = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 10,

      }}
    >
      <Typography
        component="h1"
        variant="h3"
        sx={{
          fontSize: `${matches ? '60px' : '48px'}`,
          textAlign: 'center',
          marginBottom: 3,
          color: "#f7f7f7"
        }}
      >
       PhoneBook! Create an Account
      </Typography>

      <Button
        type="button"
        variant="contained"
        size="large"
        onClick={() => {
          navigate('/register');
        }}
        sx={{
          backgroundColor: "#8A2BE2"
        }}
      >
        Get started
      </Button>
    </Container>
  );
};

export default Home;
