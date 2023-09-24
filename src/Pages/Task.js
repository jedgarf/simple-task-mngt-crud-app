import React, { useState, useEffect } from 'react';

// Bootstrap Components
import { Container, Row, Col, Card } from 'react-bootstrap';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList } from '@fortawesome/free-solid-svg-icons';

// Custom Components
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import AlertMessage from "../Components/AlertMessage";

// Services (API)
import { AddTask, ShowTask, UpdateTask, DeleteTask } from "../Services/TaskService";

const Task = () => {

    const [addTaskValue, setAddTaskValue] = useState("");
    const [editTaskValue, setEditTaskValue] = useState("");
    const [searchString, setSearchString] = useState();
    const [taskList, setTaskList] = useState();
    const [saveType, setSaveType] = useState("Add");

    // alert message
    const [message, setMessage] = useState(false);
    const [messageText, setMessageText] = useState(false);

    // edit data state
    const [editId, setEditId] = useState("");

    // Skill Form ---------------------------------------------------------------------------------------------------------------------
    const addtaskValueOnChange = (e) => {
        setAddTaskValue(e.target.value);
    }

    const editTaskValueOnChange = (e) => {
        setEditTaskValue(e.target.value);
    }

    const taskOnSubmit = async (e) => {
        e.preventDefault();

        if (editId === "") {

            const taskName = addTaskValue;

            // Insert Data
            await AddTask(taskName).then((response) => {

                // refresh task list if transaction success
                if (response.success === true) {
                    fetchUserData();
                }

                // clearing edit data state
                setEditId("");
                setAddTaskValue("");

                // set message alert
                setMessage(true);
                setMessageText(response.message);

                setTimeout(() => {
                    // After 3 seconds set the show value to false
                    setMessage(false);
                    window.location.reload();
                }, 3000)
                
                setSaveType("Add");
            });

            

        } else {

            const taskName = editTaskValue;

            // Update Data
            await UpdateTask(taskName, editId).then((response) => {
                // refresh task list if transaction success
                if (response.data.success === true) {
                    fetchUserData();
                }

                // clearing edit data state
                setEditId("");
                setEditTaskValue("");

                // set message alert
                setMessage(true);
                setMessageText(response.data.message);

                setTimeout(() => {
                    // After 3 seconds set the show value to false
                    setMessage(false)
                }, 3000)

                setSaveType("Add");
            });

        }
        
    }

    // Skill List -----------------------------------------------------------------------------------------------------------------------
    const searchOnChange = (e) => {
        console.log(e.target.value);
        setSearchString(e.target.value);
    }

    const fetchUserData = async () => {

        let data = await ShowTask(searchString);
        setTaskList(data);
        
    };

    // Edit Task
    const editTask = (id, name) => {
        setEditId(id);
        setEditTaskValue(name);
        setSaveType("Update");
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    // Delete Task
    const deleteTask = async (id) => {

        await DeleteTask(id).then((response) => {
            if (response.data.success === true) {
                fetchUserData();
            }

            // set message alert
            setMessage(true);
            setMessageText(response.data.message);

            setTimeout(() => {
                // After 3 seconds set the show value to false
                setMessage(false)
            }, 3000)
        });

    }

    useEffect(() => {

    }, [addTaskValue, editTaskValue, editId]);

    return (
        <>
            <Container className='content'>
                <Row className="justify-content-md-center">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <AlertMessage type={'primary'} message={message} setMessage={setMessage} messageText={messageText}/>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <Card className='content-card'>
                            <Card.Header color='primary'>
                                <Card.Title>{saveType} Task</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <TaskForm saveType={saveType} addtaskValueOnChange={addtaskValueOnChange} editTaskValueOnChange={editTaskValueOnChange} taskOnSubmit={taskOnSubmit} setEditId={setEditId} setAddTaskValue={setAddTaskValue} addTaskValue={addTaskValue}  setEditTaskValue={setEditTaskValue} editTaskValue={editTaskValue}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8}>
                        <Card className='content-card'>
                            <Card.Header color='primary'>
                                <Card.Title><FontAwesomeIcon icon={faList} /> Task List</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <TaskList searchString={searchString} searchOnChange={searchOnChange} taskList={taskList} fetchUserData={fetchUserData} editTask={editTask} deleteTask={deleteTask}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Task;
