import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Lists from './Lists';

const Main = () => {
    const [books, setBooks] = useState([]);
    const [token, setToken] = useState('')


    return (
        <Switch>
            <Route exact path='/'>
                <Home token={token} setToken={setToken} setBooks={setBooks} books={books}/>
            </Route>
            <Route exact path='/lists'>
                <Lists token={token}/>
            </Route>
        </Switch>
		);
}

export default Main