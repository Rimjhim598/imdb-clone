import Header from "../components/common/Header";
import { useEffect ,useState} from "react";
import { getCategoryMovies } from "../services/Api";
import { NOWPLAYING_API_URL } from "../constants/constant";
import Banner from "../components/Banner"; 
import { Box,styled } from "@mui/material";
import UpNext from "../components/UpNext";
import Slides from "../components/Slides";
const Container = styled(Box)`
    padding: 0 115px !important;
    padding: 20px;
`;
const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`;
const Home=(props)=>{
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let response = await getCategoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);    
        }
        getData();
    }, [])
    return(
        <>
        <Header/>
        <Container>
            <Wrapper>
            <Banner movies={movies}/>
            <UpNext movies={movies}/>
        </Wrapper>
        <Slides movies={movies}/>
               <Slides movies={movies}/>
        </Container>
        </>
        

    )
}
export default Home;