import React, { Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Privacy = () => {
    return (
        <Fragment>
            <Container>
                <Row className='p-2'>
                    <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                        <h4 className='section-title-login'>Privacy Page</h4>
                        <p className='section-title-contact'>
                            Le début des années 90 est également le début du « Web » comme nous le connaissons grâce à l’invention du protocole « http », et de ses fameuses « URL » et le HTML. Merci à Tim Berners et
                            Robert Cailliau du CERN pour ces travaux. Ainsi on pouvait communiquer facilement d’humain à humain (avec un lien). Des « pages » accessibles partout, avec du texte, mais aussi des images.
                            Une toile de connaissances… une « World Wide Web » (d’où les 3 « www » dans les liens internet) pour « toile d’araignée géante ». <br />

                            Les années 2000
                            Quel moment passionnant d’avoir vécu ce fameux « passage à l’an 2000 », où on nous annonçait un gros bug (et la fin du monde en 2012… il doit rester des boîtes de conserves à certains :-). <br />

                            garage informatique
                            Le « Bug de l’an 2000 » est une prise de conscience intéressante.

                            Les ressources informatiques ont évoluées très vite depuis les années 1970 et se sont rependues au point de devenir indispensables (imaginez gérer les vols d’un aéroport international, uniquement par papier…). <br />

                            Restons sur le cas des aéroports, il a fallu créer des programmes pour gérer les vols, mais aussi pour gérer la logistique (le matériel, le personnel…), la sécurité (les entrées / sorties des personnes).
                            Il a donc fallu des développeurs 🙂 mais aussi toute une organisation qui a coûté cher à mettre en place et il a fallu beaucoup de temps pour tester et mettre en place l’ensemble de la chaîne (et la fiabiliser). <br />

                            Il est normal que les sociétés amortissent l’argent investi sur le long terme, c’est un peu comme une maison, on fait en sorte qu’elle reste debout le plus longtemps possible avec le moins d’entretien à faire…</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Privacy