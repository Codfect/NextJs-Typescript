import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const contextData = useContext(ChallengesContext);
    console.log(contextData)

    const activeChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Teste e veja a descrição do desafio</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFail}>Falhei </button>
                        <button type="button" className={styles.challengeSuccess}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            ) }
        </div>
    );
}