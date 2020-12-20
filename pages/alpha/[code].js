import NavBar from "../../components/Navbar/Navbar";
import CountryDetials from "../../components/CountryDetail/CountryDetail";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { params: {code} } = context;
  // console.log(code);

  const resC = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await resC.json();

  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
  const data = await res.json();
  
  if(data.status === 400 || data.status === 404) {
    return {
      notFound: true
    }
  }

  const borders = countries.filter(country => {
    return data.borders.some(bor => bor === country.alpha3Code);
  }).map(country => {
    return {
      name: country.name,
      code: country.alpha3Code
    }
  }).sort();

  return {
    props: {
      data, 
      borders
    }
  }
}

export default function Country({data, borders}) {

  return (
    <CountryDetials data={data} borders={borders} />
  )
}