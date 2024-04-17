import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    height: '120px',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

export default DemoPaper;