import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

export default function LoadingTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
