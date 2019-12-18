import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import RegisterClient from './pages/RegisterClient';
import RegisterDocument from './pages/RegisterDocument';
import pdfDocument from './pages/pdfDocument';
import Start from './pages/Start';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/registerclient" component={RegisterClient}/>
                <Route path="/registerdocument" component={RegisterDocument}/>
                <Route path="/pdfDocument" component={pdfDocument}/>
                <Route path="/start" component={Start}/>
            </Switch>
        </BrowserRouter>
    );
}