import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/54602909?s=400&u=869175d1dcaa9abf9f6952279f7b3809cbcd26f8&v=4" alt="Profile avatar" />
            <div>
                <strong>Oliver </strong>
                <p>
                    <img src="icons/level.svg" alt="Level up image" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}