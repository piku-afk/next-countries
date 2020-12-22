import CountryCard from '../components/CountryCard/CountryCard';
import IndexForm from '../components/IndexForm/IndexForm';

import Head from 'next/head';
import styles from './index.module.css';
import { useState } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PageNumbers from '../components/Pagination/Pagination';

export async function getStaticProps() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

export default function Home({data}) {
  const [countries, setCountries] = useState(data);
  const [selectValue, setSelectValue] = useState('');

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12);

  function handleSearch(e) {
    const search = e.target.value;
    if(search === '') {
      setCountries(data);
      return;
    }
    const regex = new RegExp(search, 'ig');
    setCountries(data.filter(country => regex.test(country.name)))
  }

  function handleSelect(e) {
    const value = e.target.value;
    // console.log(value);
    setSelectValue(value);
    if(value === '') {
      setCountries(data);
      return;
    }
    setCountries(data.filter(country => country.region === value));
  }

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentPosts = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const number = Math.ceil( countries.length / countriesPerPage);

  return (
    <>
      <Head>
        <title>Where in the world ?</title>
        <meta content='Get information about all countries' property='og:title'/>
        <meta name="description" content="Get information about all countries"/>
      </Head>
      <Container className={styles.formContainer}>
        <IndexForm handleSearch={handleSearch} handleSelect={handleSelect} selectValue={selectValue} />
      </Container>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          {currentPosts.map(item => <CountryCard key={item.alpha2Code} country={item} />)}
        </Grid>
      </Container>
      <PageNumbers number={number} paginate={paginate} />
    </>
  )
}
