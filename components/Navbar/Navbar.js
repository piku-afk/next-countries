import Link from 'next/link';
import { useDark } from "../Layout";
import styles from './navbar.module.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';


export default function NavBar() {

  const { dark, setDark } = useDark();

  function handleClick() {
    setDark(prev => !prev);
  }

  return (
    <AppBar color='secondary'>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>   
          <Link href='/' passHref>
            <Typography color='textPrimary' component='a' variant='h6'>
              Where in the world ?
            </Typography>
          </Link>
          <Button className={styles.themeButton} onClick={handleClick} size='small' 
          startIcon={dark ? <WbSunnyIcon /> : <Brightness2Icon />}>
            {dark ? 'Light' : 'Dark'} Mode
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}