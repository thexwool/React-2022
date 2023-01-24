import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const post = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/thexwool.png',
            name: 'Allan Moreira',
            role: 'CTO @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'ane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-01-24 11:55:12')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/fellipe97.png',
            name: 'Luiz Fellipe',
            role: 'Educator @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'ane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-01-20 10:42:11')
    }
]

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {post.map(post => {
                        return (
                            <Post
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}
