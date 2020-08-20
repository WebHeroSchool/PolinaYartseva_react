import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

import About from "../About/About";
import Todo from "../Todo/Todo";
import Contacts from "../Contacts/Contacts";

import styles from './App.module.css';
import './fonts/fonts.css';
import './Img/background5.jpg';

const App = () =>
    (<Router>
        <div className={styles.wrap}>
            <Card className={styles.header}>
                <nav className={styles.menu}>
                    <Link to='/about'><a className={styles.link}>about</a></Link>
                    <Link to='/todo'><a className={styles.link}>todo-app</a></Link>
                    <Link to='/contacts'><a className={styles.link}>contacts</a></Link>
                </nav>
            </Card>

            <Card className={styles.content}>
                <Route path='/about' exact component={About} />
                <Route path='/todo' component={Todo} />
                <Route path='/contacts' component={Contacts} />
            </Card>
        </div>
    </Router>);

export default App;
