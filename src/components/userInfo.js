import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Zoom } from 'react-reveal';

export default function userInfo(props) {
    let {user} = props.props
    return (
        <div>
            <Zoom>
                <Card id='userCard'>
                    <Card.Img variant="top" src={user.avatar_url} />
                    <Card.Body>
                        <Card.Title><h1>{user.name}</h1></Card.Title>
                        <div style={{ textAlign: 'left' }}>
                            <Card.Text>
                                <span className='userInfoKeys'>User name: </span> {user.login ? user.login : 'null'}
                            </Card.Text>
                            <Card.Text>
                                <span className='userInfoKeys'>Bio: </span> {user.bio ? user.bio : 'null'}
                            </Card.Text>
                            <Card.Text>
                                <span className='userInfoKeys'>Company: </span> {user.company ? user.company : 'null'}
                            </Card.Text>
                            <Card.Text>
                                <span className='userInfoKeys'>Location: </span> {user.location ? user.location : 'null'}
                            </Card.Text>
                            <Card.Text>
                                <span className='userInfoKeys'>Email: </span> {user.email ? user.email : 'null'}
                            </Card.Text>
                            <Card.Text>
                                <span className='userInfoKeys'>Followers: </span> {user.followers ? user.followers : 'null'}
                            </Card.Text>
                            <Card.Text>
                                <span className='userInfoKeys'>Following: </span> {user.following ? user.following : 'null'}
                            </Card.Text>
                        </div>
                        <a href={user.html_url} >
                            <Button variant="primary">Go to github page</Button>
                        </a>
                    </Card.Body>
                </Card>
            </Zoom>
        </div>
    )
}
