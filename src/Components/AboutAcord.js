import React from 'react'
import { Accordion } from 'react-bootstrap'

function AboutAcord({accordData}) {
    return (
        <Accordion id='about-accordion'>
            {
                accordData.map((item)=>{
                    return (
                        <Accordion.Item eventKey={item.id} key={item.id}>
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body>
                                <ol>
                                    {
                                        item.answers.map((ans)=>{
                                            return (
                                            <li>{ans}</li>
                                            )
                                        })
                                    }
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })
            }
        </Accordion>
    )
}

export default AboutAcord
