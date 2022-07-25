import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './progressbar.css';
import SingleProgressbar from './SingleProgressbar';


const Progressbar = () => {
  return (
    <section className="progressbar">
        <div className="progressbar-area">
            <Container>
                <div className="progressbar-content-wrapper">
                    <Row>
                    <Tabs justify variant="pills" defaultActiveKey="tab-1">
                        <Tab eventKey="tab-1" title="Web">
                            <Row>
                                <SingleProgressbar progressTitle="React" progressPercent="90" />
                                <SingleProgressbar progressTitle="Gatsby" progressPercent="90" />
                                <SingleProgressbar progressTitle="Next" progressPercent="75" />
                                <SingleProgressbar progressTitle="Node" progressPercent="80" />
                                <SingleProgressbar progressTitle="Express " progressPercent="90" />
                                <SingleProgressbar progressTitle="MongoDB" progressPercent="90" />
                                <SingleProgressbar progressTitle="MySQL" progressPercent="85" />
                            </Row>
                        </Tab>
                        <Tab eventKey="tab-2" title="Others">
                            <Row>
                                <SingleProgressbar progressTitle="React Native" progressPercent="85" />
                                <SingleProgressbar progressTitle="Electron JS" progressPercent="90" />
                                <SingleProgressbar progressTitle="Johnny Five" progressPercent="75" />
                                <SingleProgressbar progressTitle="Svelte" progressPercent="70" />
                                <SingleProgressbar progressTitle="Redux " progressPercent="80" />
                                <SingleProgressbar progressTitle="GraphQL" progressPercent="80" />
                                <SingleProgressbar progressTitle="Jest" progressPercent="65" />
                                <SingleProgressbar progressTitle="Mocha" progressPercent="65" />
                                <SingleProgressbar progressTitle="Cypress" progressPercent="65" />
                                <SingleProgressbar progressTitle="SVG" progressPercent="80" />
                            </Row>
                        </Tab>
                        <Tab eventKey="tab-3" title="Programming">
                        <Row>
                                <SingleProgressbar progressTitle="JavaScript" progressPercent="90" />
                                <SingleProgressbar progressTitle="C" progressPercent="90" />
                                <SingleProgressbar progressTitle="C++" progressPercent="75" />
                                <SingleProgressbar progressTitle="Python" progressPercent="50" />
                                <SingleProgressbar progressTitle="Java " progressPercent="50" />
                            </Row>
                        </Tab>
                        <Tab eventKey="tab-4" title="Tools">
                            <Row>
                                <SingleProgressbar progressTitle="Git" progressPercent="85" />
                                <SingleProgressbar progressTitle="Photoshop" progressPercent="75" />
                                <SingleProgressbar progressTitle="Illustrator" progressPercent="75" />
                                <SingleProgressbar progressTitle="Svelte" progressPercent="70" />
                                <SingleProgressbar progressTitle="Travis CI " progressPercent="85" />
                                <SingleProgressbar progressTitle="AppVeyor" progressPercent="75" />
                                <SingleProgressbar progressTitle="Docker" progressPercent="60" />
                                <SingleProgressbar progressTitle="Kubernetes" progressPercent="30" />
                            </Row>
                        </Tab>
                </Tabs>
                    </Row>
                </div>
            </Container>
        </div>
    </section>
  )
}

export default Progressbar;