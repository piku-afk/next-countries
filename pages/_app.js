import { Paper } from '@material-ui/core';
import CustomTheme from '../components/CustomTheme';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar/Navbar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CustomTheme>
        <Paper className='parentPaper' square>
          <NavBar />
          <Component {...pageProps}/>
        </Paper>
      </CustomTheme>
    </Layout>
  )
}

export default MyApp
