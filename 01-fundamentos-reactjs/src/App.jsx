import styles from './App.module.css'
import './global.css'

import {
    Post
} from './Post'

import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post
                        author="Allan Moreira"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo, nibh sit amet malesuada scelerisque, ipsum nibh vehicula augue, auctor rutrum erat diam vitae orci."
                    />

                    <Post
                        author="Luiz Fellipe"
                        content="Sem notebook não tem como trabalhar"
                    />
                </main>
            </div>
        </div>
    )
}
