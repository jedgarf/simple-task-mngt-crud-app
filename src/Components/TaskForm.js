import React, { useState, useEffect } from 'react';

// Bootstrap Components
import { Form, Button } from 'react-bootstrap';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faRemove } from '@fortawesome/free-solid-svg-icons';

const TaskForm = ({ saveType, addtaskValueOnChange, editTaskValueOnChange, taskOnSubmit, setEditId, setAddTaskValue, addTaskValue, setEditTaskValue, editTaskValue }) => {

    const onClearTaskForm = () => {
        if (addTaskValue !== "") {
            window.location.reload();   
        }
    }

    useEffect(() => {
    }, [addTaskValue, editTaskValue, addtaskValueOnChange, editTaskValueOnChange])

    return (
        <>
            <Form onSubmit={() => taskOnSubmit()}>
                <Form.Group>
                    <Form.Label>Task *</Form.Label>
                    {saveType === "Add" ? 
                    (<Form.Control id="task-name" type="text" onKeyUp={(e) => addtaskValueOnChange(e)} defaultValue={""} required/>)
                    :
                    (<Form.Control id="task-name" type="text" onKeyUp={(e) => editTaskValueOnChange(e)} defaultValue={editTaskValue} required/>)}
                </Form.Group>
                <br/>
                <Button className="task-form-bottons" variant="danger" type="button" onClick={() => onClearTaskForm()}>
                    <FontAwesomeIcon icon={faRemove} /> Clear
                </Button>
                <Button className="task-form-bottons" variant="primary" type="submit">
                    <FontAwesomeIcon icon={faSave} /> Save
                </Button>
            </Form>
        </>
    );

};

export default TaskForm;