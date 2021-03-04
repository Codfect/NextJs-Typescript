import { GetServerSideProps } from 'next';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { CountDownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from '../contexts/ChallengeContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
  
      <div className={styles.container}>
        <Head>
          <title>Home Page</title>
        </Head>

        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  }

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  console.log(user);

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

 