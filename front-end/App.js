//Tous les import de la page
//Tous les imports nécésaire lier à react native.
import React from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';

//Importer les écrants de l'application
import Index from './components/pages/hello/index';
import Login from './components/pages/login/login.jsx';
import Register from './components/pages/register/register.jsx';
import Home from './components/pages/home/homePage.jsx';
import Profile from './components/pages/profile/profile.jsx';
import Parametres from './components/pages/parametres/parametres.jsx';
import Films from './components/pages/filmsEtSeries/films.jsx';
import Series from './components/pages/filmsEtSeries/series';
import MovieDetails from './components/pages/filmsEtSeries/MovieDetails';
import {MoviesProvider} from "./components/context/moviesContext";
import {SeriesProvider} from "./components/context/seriesContext";
import SeriesDetails from "./components/pages/filmsEtSeries/SeriesDetails";

//export default function App () {
export default class App extends React.Component {

    //retourne les routes pour naviguer dans l'application
    render() {
        return (
            <MoviesProvider>
                <SeriesProvider>
                    <NativeRouter>
                        <Routes>
                            <Route path='/' element={<Index/>}/>

                            <Route path='/login' element={<Login/>}/>
                            <Route path='/register' element={<Register/>}/>

                            <Route path='/home' element={<Home/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/parametres' element={<Parametres/>}/>
                            <Route path='/films' element={<Films/>}/>
                            <Route path='/series' element={<Series/>}/>

                            <Route path='/movie-details' element={<MovieDetails/>}/>
                            <Route path='/series-details' element={<SeriesDetails/>}/>
                        </Routes>
                    </NativeRouter>
                </SeriesProvider>
            </MoviesProvider>
        );
    }
}
