import { useState, useRef } from 'react';
import {AppBar, Toolbar, styled,Box, Typography,InputBase} from '@mui/material';
import { logoURL } from '../../constants/constant';
import {Menu, BookmarkAdd, ExpandMore} from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../constants/routes';
//const StyledToolBar = styled(Toolbar)`
const StyledToolBar = styled(Toolbar)`
background: #121212;
min-height: 56px !important;
padding: 0 115px !important;
justify-content: space-between;
& > * {
    padding: 0 16px;
}
& > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
        font-weight: 600;
        font-size: 14px;
    }
}
& > p {
    font-weight: 600;
    font-size: 14px;
}
`;
const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`

const Logo = styled('img')({
    width: 64,
})


const Header=()=>{
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClick=(e)=>{
        setOpen(e.currentTarget);

    }
    const handleClose=()=>{
        setOpen(null);
    }
    return(
        <AppBar position='static'>
            <StyledToolBar>
              <Logo src={logoURL} alt="LOGO" onClick={() => navigate(routePath.home)}/>
              <Box onClick={handleClick}>
                <Menu/>
                <Typography>Menu</Typography>
              </Box>
              <HeaderMenu open={open} handleClose={handleClose}/>
              <InputSearchField/>
              <Typography>IMDb<Typography component="span" style={{ fontSize: 14 }}>Pro</Typography></Typography>
              <Box>
                <BookmarkAdd/>
                <Typography>WatchList</Typography>
              </Box>
              <Typography>Sign In</Typography>
              <Box>
                
                <Typography>EN</Typography>
                <ExpandMore/>
              </Box>
            </StyledToolBar>
        </AppBar>
    )
}
export default Header;