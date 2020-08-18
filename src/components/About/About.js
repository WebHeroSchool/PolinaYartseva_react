import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from "@octokit/rest";
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        isError: false,
        errorMessage: '',
        repoList: [],
        user: []
    }

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'PolinaYartseva'
        }).then(({ data }) => {
                this.setState({
                    repoList: data,
                    isLoading: false
                });
            }) .catch(error => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    errorMessage: error
                });
            });
        octokit.users.getByUsername({
            username: "PolinaYartseva"
        }).then(({ data }) => {
            this.setState({
                user: data,
                isLoading: false
            });
        }) .catch(error => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    errorMessage: error
                });
            });
        };

    render() {
        const { isLoading, isError, errorMessage, repoList, user } = this.state;
        return <div className={styles.wrap}>
            {isLoading ? <CircularProgress className={styles.preloader}/> :
                <div>
                    <h1 className={styles.title}>Обо мне</h1>
                    {isError ? 'Ошибка получения данных с сервера:' + errorMessage :
                        <div className={styles.repo}>
                            <div>
                                <p className={styles.login}>Логин: {user.login}</p>
                                <img src={user.avatar_url} alt='Фото пользователя' className={styles.user_avatar} />
                            </div>
                            <div>
                                <p className={styles.repo_list}>Мои репозитории:</p>
                                    {repoList.map(repo => (<p key={repo.id}>
                                            <a href={repo.id} className={styles.repo_name}>{repo.name}</a>
                                        </p>
                                    ))}
                                </div>
                        </div>
                    }
                </div>
            }
        </div>
    }
}

export default About;