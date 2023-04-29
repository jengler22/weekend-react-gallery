import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Gallery of My Life
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;