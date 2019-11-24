import React from 'react'
import ArticleLink from '../../ArticleLink'

export default function Matematika() {
    return (
        <main>
            <h1>Matematika</h1>
            <div className="articles">
                <ArticleLink name="Fourierova transformace" />
                <ArticleLink
                    url="Test"
                    imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
                    imgAlt="kocicka"
                    name="Test"
                    text="Testovací článek"
                    subject="Fyzika"
                />
            </div>
        </main>
    )
}
