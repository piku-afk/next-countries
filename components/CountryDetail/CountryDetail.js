import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import styles from './countryD.module.css';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export default function CountryDetials({data, borders}) {
  const router = useRouter();
  const languages = data.languages.map(item => item.name).join(', ');

  function handleBack() {
    router.back();
  }

  return (
    <Container className={styles.container} maxWidth='lg'>
      <Head>
        <title>{data.name} | {data.subregion} | {data.region}</title>
        <meta name="description" content={`${data.name} (${data.nativeName}) is a country in ${data.subregion}. Its capital is ${data.capital} and the native language${data.languages.length > 1 ? 's' : '' } ${data.languages.length > 1 ? 'are' : 'is' } ${languages}`}/>
      </Head>
      <Grid container justify='space-between' alignContent='flex-start'>
        <Grid item xs={12}>
          <Button color='secondary' className={styles.back} size='medium' onClick={handleBack} variant='contained' startIcon={<KeyboardBackspaceIcon />} >Back</Button>
        </Grid>
        <Grid item sm={5}>
          <Card style={{borderRadius: 0}}> 
            <CardMedia component='img' image={data.flag} alt={`${data.name}'s flag`} />
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Grid item xs={12}>
            <Typography className={styles.name} component='h1' variant='h5'>
              {data.name}
            </Typography>
          </Grid>
          <Grid container justify='space-between'>
            <Grid className={styles.details} item lg={6} md={6} sm={12} xs={12}>
              <Typography className={styles.details} component='p' variant='subtitle1'><strong>Native Name:</strong> {data.nativeName}</Typography>
              <Typography className={styles.details} component='p' variant='subtitle1'><strong>Population:</strong> {data.population}</Typography>
              <Typography className={styles.details} component='p' variant='subtitle1'><strong>Region:</strong> {data.region}</Typography>
              <Typography className={styles.details} component='p' variant='subtitle1'><strong>Sub Region:</strong> {data.subregion}</Typography>
              <Typography className={styles.details} component='p' variant='subtitle1'><strong>Capital:</strong> {data.capital}</Typography>
            </Grid>
            <Grid className={styles.details} item lg={6} md={6} sm={12} xs={12}>
              <Typography className={styles.details} component='p' variant='subtitle1'><strong>Top Level Domain:</strong> {data.topLevelDomain.join(', ')}</Typography>
              <Typography className={styles.details} component='p' variant='subtitle1'><strong>Currencies:</strong> {data.currencies.map(item => item.name).join(', ')}</Typography>
              <Typography className={styles.details} component='p' variant='subtitle1'><strong>Language:</strong> {languages}</Typography>
            </Grid>
          </Grid>
          <Grid className={styles.borders} container>
            <Grid item md={3} xs={12}>
              <Typography className={styles.borders} component='p' variant='subtitle1'><strong>Border Countries:</strong></Typography>
            </Grid>
            <Grid item md={9} xs={12}>
              {borders.map(({name, code}) => (
                <Link key={code} href={`/alpha/${code}`}>
                  <Button color='secondary' className={styles.borderButton} size='small' variant='contained'>{name}</Button>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}