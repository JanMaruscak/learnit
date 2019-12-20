import React from 'react'
import ArticleLink from '../../components/ArticleLink'

export default function Matematika() {
    return (
        <main>
            <h1>Matematika</h1>
            <div className="articles">
                <ArticleLink name="Fourierova transformace" subject="Matematika"
                imgUrl="http://lodev.org/cgtutor/images/1ddft.gif"
                imgAlt="Fourierova Transformace graf"
                text="Převod signálů
                z časové reprezentace do frekvenční
                reprezentace.
                "
                url="Fourierova_Transformace"/>
                <ArticleLink
                    url="Test"
                    imgUrl=""
                    imgAlt="kocicka"
                    name="Test"
                    text="Testovací článek"
                    subject="Matematika"
                />
            </div>
        </main>
    )
}
