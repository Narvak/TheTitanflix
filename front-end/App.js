//Tous les import de la page
  //Tous les imports nécésaire lier à react native.
  import React from 'react';
  import { NativeRouter, Routes, Route } from 'react-router-native';

    //Importer les écrants de l'application
  import Index from './components/pages/hello/index';
  import Login from './components/pages/login/login.jsx';
  import Register from './components/pages/register/register.jsx';
  import Home from './components/pages/home/homePage.jsx';
  import Profile from './components/pages/profile/profile.jsx';
  import Parametres from './components/pages/parametres/parametres.jsx';
  import Films from './components/pages/filmsEtSeries/films.jsx';
  import Series from './components/pages/filmsEtSeries/series';
  import Details from './components/pages/filmsEtSeries/details';
  
  //export default function App () {
    export default class App extends React.Component {

      //retourne les routes pour naviguer dans l'application
      render() {
        return (
          <NativeRouter>
            <Routes>
              <Route path='/' element={<Index />} component={Index}></Route>

              <Route path='/login' element={<Login />} component={Login}></Route>
              <Route path='/register' element={<Register />} component={Register}></Route>

              <Route path='/home' element={<Home/>} component={Home}></Route>
              <Route path='/profile' element={<Profile />} component={Profile}></Route>
              <Route path='/parametres' element={<Parametres />} component={Parametres}></Route>
              <Route path='/films' element={<Films />} component={Films}></Route>
              <Route path='/series' element={<Series />} component={Series}></Route>

              <Route path='/details' element={<Details />} component={Details}></Route>
            </Routes>
          </NativeRouter>
        );
      }
    }