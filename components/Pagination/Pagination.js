import { Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

export default function PageNumbers({paginate, number}) {
  const styles = {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <Paper style={styles} elevation={0}>
      <Pagination shape='rounded' count={number} onChange={(e, p) => paginate(p)} />
    </Paper>
  )
}