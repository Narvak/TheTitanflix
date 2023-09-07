//Tous les import de la page
//Tous les imports nécésaire lier à react native.
import React from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';

//Importer les écrants de l'application
import {MoviesProvider} from "./components/context/moviesContext";
import {SeriesProvider} from "./components/context/seriesContext";
import {UserProvider} from "./components/context/userContext";
import {Router} from "./components/routes/Routes";

//export default function App () {
export default class App extends React.Component {

    //retourne les routes pour naviguer dans l'application
    render() {
        return (
            <UserProvider>
                <MoviesProvider>
                    <SeriesProvider>
                        <NativeRouter>
                            <Router />
                        </NativeRouter>
                    </SeriesProvider>
                </MoviesProvider>
            </UserProvider>
        );
    }
}
