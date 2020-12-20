import styles from './indexF.module.css';

import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

export default function IndexForm({handleSearch, handleSelect, selectValue}) {

  return (
    <form className={styles.form}>
      <Grid container justify='space-between' spacing={4}>
        <Grid item md={4} sm={7} xs={12}>
          <TextField color='primary' onChange={handleSearch} variant='outlined' size='small' fullWidth placeholder='Search for a country...' />
        </Grid>
        <Grid item md={2} sm={3} xs={7}>
          <FormControl color='primary' fullWidth size='small' variant='outlined'>
            <Select
            value={selectValue}
            displayEmpty
            onChange={handleSelect}>
              <MenuItem value=''>Filter by region</MenuItem>
              <MenuItem value='Africa' >Africa</MenuItem>
              <MenuItem value='Americas' >Americas</MenuItem>
              <MenuItem value='Asia' >Asia</MenuItem>
              <MenuItem value='Europe' >Europe</MenuItem>
              <MenuItem value='Oceania' >Oceania</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}