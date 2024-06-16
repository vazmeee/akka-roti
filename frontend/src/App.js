import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
// import Profiles from './components/Profiles';
import Donations from './components/Donations';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CallAPIView from './components/CallAPIView';
import SuccessView from './components/SuccessView';
// import Home from './components/Home';
import VerifyEmail from './components/VerifyEmail';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import { SessionAuth } from 'supertokens-auth-react/recipe/session';
import { SuperTokensWrapper } from 'supertokens-auth-react';
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react/ui';
import { PreBuiltUIList, ComponentWrapper, SuperTokensConfig } from './supertokensConfig';
import SuperTokens from "supertokens-auth-react";
// import SessionCheck from './components/SessionCheck';

SuperTokens.init(SuperTokensConfig);

function App() {
    return (
        <SuperTokensWrapper>
            <ComponentWrapper>
                <Router>
                    <div className="App app-container">
                        <Header />
                        <div className="fill">
                            <Routes>
                                {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"), PreBuiltUIList)}
                                <Route exact path="/" element={<Hero />} />
                                <Route path="/testimonials" element={<Testimonials />} />
                                <Route path="/auth" element={<SignIn />} />
                                <Route path="/signup" element={<SignUp />} />
                                <Route path="/call-api" element={<CallAPIView />} />
                                <Route path="/success" element={<SuccessView />} />
                                <Route path="/verify-email" element={<VerifyEmail />} />
                                <Route path="/dashboard" element={
                                    <SessionAuth>
                                        <Dashboard />
                                    </SessionAuth>
                                } />
                                <Route path="/donations" element={
                                    <SessionAuth>
                                        <Donations />
                                    </SessionAuth>
                                } />
                                <Route path="/settings" element={
                                    <SessionAuth>
                                        <Settings />
                                    </SessionAuth>
                                } />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </ComponentWrapper>
        </SuperTokensWrapper>
    );
}

export default App;
