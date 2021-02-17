import './AddNewTask.css'
import React from 'react'

function AddNewTaskForm(){
    
        return (
                <div className = 'modal-container-new-task'>
                    <div className = 'modal-header-new-task'>
                        <h1 className='modal-h1-new-task' 
                            style={{'color':'black'}}>
                                Registration of new Task
                        </h1>         
                    </div>
                    <div className='modal-body-new-task'>
                        <form className='task-input-form'>
                            <div className='input-row'>
                                <div className='text-row'>
                                    <h4>Name  </h4>
                                </div>
                                <div className='text-input'>
                                    <input className='input-form' 
                                    placeholder='Insert The Task Name'/>
                                </div>
                            </div>
                            <div className='input-row'>
                                <div className='text-row'>
                                    <h4>Status   </h4>
                                </div>
                                <div className='text-input'>
                                    <input type='text' className='input-form'
                                    placeholder='Insert Status'/>
                                </div>
                            </div>

                            <div className='input-row'>
                                <div className='text-row'>
                                    <h4>Date  </h4>
                                </div>
                                <div className='text-input'>
                                    <input type='date' className='input-form'
                                    placeholder='click to insert Date'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        )
}

export default AddNewTaskForm