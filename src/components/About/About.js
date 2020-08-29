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
            }).catch(error => {
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
        }).catch(error => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    errorMessage: error
                });
            });
        };

    render() {
        const { isLoading, repoList, user } = this.state;
        return (<div className={styles.wrap}>
            {isLoading ? <CircularProgress className={styles.preloader}/> :

                    <h1 className={styles.title}>about me</h1>}
                    <div className={styles.content}>
                        <div className={styles.content_photo}>
                            <img src={user.avatar_url} alt='User' className={styles.user_avatar} />
                        </div>
                        <div className={styles.content_links}>
                            <p className={styles.user_decr}>My name is Polina Yartseva and I'm frontend developer</p>
                            <p className={styles.user_bio}>{user.bio}</p>
                            <p className={styles.user_id}>GitHub ID: {user.id}</p>
                            <p className={styles.user_login}>GitHub login: {user.login}</p>
                            <p className={styles.url}>GitHub url: <a href={user.html_url}>{user.html_url}</a></p>
                        </div>
                    </div>
                    <div className={styles.content_repo}>
                        <p className={styles.repo_list}>My repositories:</p>
                        <div className={styles.repo_links}>
                            {repoList.map(repo => (<div className={styles.repo_item} key={repo.name}>
                                <a href={repo.name} className={styles.repo_name}>{repo.name}</a>
                                <p className={styles.repo_name}>{repo.description}</p>
                            </div>
                            ))}
                        </div>
                    </div>
        </div>)
    }
}

export default About;