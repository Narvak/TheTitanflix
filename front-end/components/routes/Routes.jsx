import {Route, Routes} from "react-router-native";
import Index from "../pages/hello";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Home from "../pages/home/homePage";
import Profile from "../pages/profile/profile";
import Parametres from "../pages/parametres/parametres";
import Films from "../pages/filmsEtSeries/films";
import Series from "../pages/filmsEtSeries/series";
import MovieDetails from "../pages/filmsEtSeries/MovieDetails";
import SeriesDetails from "../pages/filmsEtSeries/SeriesDetails";
import {useUserContext} from "../context/userContext";

export const Router = () => {
    const {user} = useUserContext();

    return <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/home' element={<Home />}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/parametres' element={<Parametres/>}/>
        <Route path='/films' element={<Films/>}/>
        <Route path='/series' element={<Series/>}/>

        <Route path='/movie-details' element={<MovieDetails/>}/>
        <Route path='/series-details' element={<SeriesDetails/>} />
    </Routes>
}


/*return user ? <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/parametres' element={<Parametres/>}/>
<Route path='/films' element={<Films/>}/>
<Route path='/series' element={<Series/>}/>

<Route path='/movie-details' element={<MovieDetails/>}/>
<Route path='/series-details' element={<SeriesDetails/>}/>
</Routes> : <Routes>
<Route path='/' element={<Index/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>

<Route path='/home' element={<Home />}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/parametres' element={<Parametres/>}/>
<Route path='/films' element={<Films/>}/>
<Route path='/series' element={<Series/>}/>

<Route path='/movie-details' element={<MovieDetails/>}/>
<Route path='/series-details' element={<SeriesDetails/>} />
</Routes>*/