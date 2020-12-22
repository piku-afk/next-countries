import styles from './countryC.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useDark } from "../Layout";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function CountryCard({country}) {

  const { dark } = useDark();

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Link href={`/alpha/${country.alpha2Code}`}>
        <Card style={{backgroundColor: dark ? '#2b3743' : '#fff'}} className={styles.cardContainer}>
          <Image src={country.flag} width={300} height={190} layout='responsive' alt={`${country.flag}'s flag`} />
          <CardContent className={styles.card}>
            <Typography className={styles.name} component='h6' variant='h6'>{country.name}</Typography>
            <Typography className={styles.card} component='p' variant='body2'><strong>Population:</strong> {Number(country.population).toLocaleString()}</Typography>
            <Typography className={styles.card} component='p' variant='body2'><strong>Region:</strong> {country.region}</Typography>
            <Typography className={styles.card} component='p' variant='body2'><strong>Capital:</strong> {country.capital}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}