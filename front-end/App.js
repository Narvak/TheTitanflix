//Tous les import de la page
//Tous les imports nécésaire lier à react native.
import React from 'react';
import {NativeRouter} from 'react-router-native';

//Importer les écrants de l'application
import {MoviesProvider} from "./src/context/moviesContext";
import {SeriesProvider} from "./src/context/seriesContext";
import {UserProvider} from "./src/context/userContext";
import {Router} from "./src/routes/Routes";
import {VideoContext, VideoProvider} from "./src/context/videoContext";

//export default function App () {
export default class App extends React.Component {

    //retourne les routes pour naviguer dans l'application
    render() {
        return (
            <NativeRouter>
                <UserProvider>
                    <MoviesProvider>
                        <SeriesProvider>
                            <VideoProvider>
                                <Router/>
                            </VideoProvider>
                        </SeriesProvider>
                    </MoviesProvider>
                </UserProvider>
            </NativeRouter>
        );
    }
}
