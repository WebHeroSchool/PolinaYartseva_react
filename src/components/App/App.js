import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

import About from "../About/About";
import Todo from "../Todo/Todo";
import Contacts from "../Contacts/Contacts";

import styles from './App.module.css';
import './fonts/fonts.css';

const App = () =>
    (<Router>
        <div className={styles.wrap}>
            <Card className={styles.sidebar}>
                <ul className={styles.menu}>
                    <Link to='/about'><li className={styles.link}>Обо мне</li></Link>
                    <Link to='/todo'><li className={styles.link}>Дела</li></Link>
                    <Link to='/contacts'><li className={styles.link}>Контакты</li></Link>
                </ul>
            </Card>

            <Card className={styles.content}>
                <Route path='/about' exact component={About} />
                <Route path='/todo' component={Todo} />
                <Route path='/contacts' component={Contacts} />
            </Card>
        </div>
    </Router>);

export default App;
