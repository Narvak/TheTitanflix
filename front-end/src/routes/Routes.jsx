import {Route, Routes} from "react-router-native";
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
import React from "react";
import GestionPage from "../pages/manage/managePage";
import Footer from "../components/footer/footer";
import Version from "../components/version/version";
import Header from "../components/header/header";
import {StyleSheet, View} from "react-native";
import {VideoPage} from "../pages/video/Video";
import Index from "../pages/hello";

export const Router = () => {
    const {user} = useUserContext();

    return user ?
        <View style={styles.container}>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/parametres' element={<Parametres/>}/>
                <Route path='/films' element={<Films/>}/>
                <Route path='/series' element={<Series/>}/>

                <Route path='/movie-details' element={<MovieDetails/>}/>
                <Route path='/series-details' element={<SeriesDetails/>}/>

                <Route path="/video" element={<VideoPage/>}/>

                <Route path="/gestion" element={<GestionPage/>}/>
            </Routes>
            <Version/>
            <Footer/>
        </View>
        : <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
});
