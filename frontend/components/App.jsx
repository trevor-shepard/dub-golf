import React from 'react'
import { Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import Splash from './SplashContainer'
import Questions from './QuestionsContainer'
import finished from './finished'
import Users from './UsersContainer'

const App = ({ store }) => (
    <Provider store={ store }>
        <HashRouter>
            <Switch>
                <Route path='/questions' component={Questions} />
                <Route path='/finished' component={finished} />
                <Route path='/superswiftysecretanswersdonttellplease' component={Users} />
                <Route path='/' component={Splash} />
            </Switch>
        </HashRouter>
    
    </Provider>
)

export default App