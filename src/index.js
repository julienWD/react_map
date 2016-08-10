import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from './pages/Layout';
import Index from './pages/Index';
import Book from './pages/Book';
import BookingHome from './pages/Booking/BookingHome';
import About from './pages/About';
import Faq from './pages/Faq';
import News from './pages/News';
import Partner from './pages/Partner';
import Login from './pages/Login';
import FaqCategory from './components/FaqCategory';
import FaqInner from './pages/FaqInner';
import AboutHome from './pages/About/AboutHome';
import FTHistory from './pages/About/FTHistory';
import Contact from './pages/About/Contact';
import Press from './pages/About/Press';
import Partners from './pages/About/Partners';
import ReservationDetails from './pages/ReservationDetails';
import PartnersHome from './pages/About/Partner/PartnersHome';
import PartnersInner from './pages/About/Partner/PartnersInner';
import NewsletterSignUp from './pages/About/NewsletterSignUp';
import Job from './pages/About/Job';
import PhotoArchive from './pages/About/PhotoArchive';
import Team from './pages/About/Team';
import WhatIsFreetrailer from './pages/About/WhatIsFreetrailer';
import Testimonials from './pages/About/Testimonials';
import ThankYou from './pages/ThankYou';

injectTapEventPlugin();
const app = document.getElementById('app');
// Render the main component into the dom
ReactDOM.render(

<MuiThemeProvider muiTheme={getMuiTheme()}>
  <Router onUpdate={() => window.scroll(0,0)} history={hashHistory}>
    <Route path="/" component={Layout}>
    	<IndexRoute component={Index} />
      	<Route path="/book-en-trailer/:address" name="/book-en-trailer" component={Book}>
          <IndexRoute component={BookingHome} />
          <Route path="/book-e-trailer/:id/:trailerId/:startDate/:endDate" component={ReservationDetails}/>
        </Route>
      	<Route path="/spoergsmaal-svar" name="spoergsmaal-svar" component={FaqCategory}>
          <IndexRoute component={Faq} />
          <Route path="/spoergsmaal-svar/:subTitle" component={FaqInner}/>
        </Route>
      	<Route path="/nyheder" name="nyheder" component={News}/>
        <Route path="/om-freetrailer" component={About}>
                <IndexRoute component={AboutHome} />
                <Route path="/om-freetrailer/medarbejdere" component={Team}/>
                <Route path="/om-freetrailer/historien-om-freetrailer" component={FTHistory}/>
                <Route path="/om-freetrailer/hvad-er-freetrailer" component={WhatIsFreetrailer}/>
                <Route path="/om-freetrailer/det-siger-brugerne" component={Testimonials}/>
                <Route path="/om-freetrailer/hold-dig-opdateret-paa-freetrailer" component={NewsletterSignUp}/>
                <Route path="/om-freetrailer/job" component={Job}/>
                <Route path="/om-freetrailer/kontakt-os" component={Contact}/>
                <Route path="/om-freetrailer/presse" component={Press}/>
                <Route path="/om-freetrailer/samarbejdspartnere" component={Partners}>
                  <IndexRoute component={PartnersHome}/>
                  <Route path="/om-freetrailer/samarbejdspartnere/:title" component={PartnersInner}/>
                </Route>
                <Route path="/om-freetrailer/fotoarkiv" component={PhotoArchive}/>
        </Route>
        <Route path="thank-you/:locationId/:trailerId/:pickUpD/:returnD" component={ThankYou} />
      	<Route path="/bliv-partner" name="bliv-partner" component={Partner}/>
      	<Route path="/login" name="login" component={Login}/>
	    </Route>
    </Router>
  </MuiThemeProvider>,
app);
