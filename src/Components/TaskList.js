import { useEffect } from 'react';

// Bootstrap Components
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ searchString, searchOnChange, taskList, fetchUserData, editTask, deleteTask }) => {

    useEffect(() => {
        fetchUserData();
    }, [searchString]);

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 5, offset: 7 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder='Search task' onChange={searchOnChange} autoComplete='off'/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    {taskList?.length > 0 ?
                        <>
                        {taskList?.map((item, no) => {
                            return (
                                <Card key={no} className="task-list-card">
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col xs={7} sm={8} md={9} lg={9} xl={10}>
                                                    <Card.Text>
                                                        {item.name}
                                                    </Card.Text>
                                                </Col>
                                                <Col xs={5} sm={4} md={3} lg={3} xl={2}>
                                                    <div className="task-botton-group">
                                                        <Button className="task-action-bottons" variant="success" size="sm" title="Edit" onClick={() => editTask(item.id, item.name)}><FontAwesomeIcon icon={faEdit} /></Button>
                                                        <Button className="task-action-bottons" variant="danger" size="sm" title="Delete" onClick={() => deleteTask(item.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                        </>
                    :
                    "No Result Found."
                    }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TaskList;