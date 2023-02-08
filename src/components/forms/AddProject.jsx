import React from 'react'
import './AddProject.css'
import {db} from '../database/DatabaseHelper'
import { ref,set } from "firebase/database"
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

function AddProjectForm(){
    
    const [project, setProject] = useState({     
            ProjectName: '',
            DeadLine: '',
            GeneralObjective: '',
            Key: uuidv4(),
            OperatorName: '',
            PeopleInvolved: '',
            Result: '',
            SpecificObjective: '',
            TypeOfActivity: '',
            Implementadores: '',
            Parceiros: '',
            Financiadores: ''

    })

    function setProjectName(e){
        setProject({
                    ProjectName: e.target.value,
                    DeadLine: project.DeadLine,
                    GeneralObjective: project.GeneralObjective,
                    Key: project.Key,
                    OperatorName: project.OperatorName,
                    PeopleInvolved: project.PeopleInvolved,
                    Result: project.Result,
                    SpecificObjective: project.SpecificObjective,
                    TypeOfActivity: project.TypeOfActivity,
                    Implementadores: project.Implementadores,
                    Parceiros: project.Parceiros,
                    Financiadores: project.Financiadores
        })
    }

    function setObjective(e){
        setProject({
            ProjectName: project.ProjectName,
            DeadLine: project.DeadLine,
            GeneralObjective: e.target.value,
            Key: project.Key,
            OperatorName: project.OperatorName,
            PeopleInvolved: project.PeopleInvolved,
            Result: project.Result,
            SpecificObjective: project.SpecificObjective,
            TypeOfActivity: project.TypeOfActivity,
            Implementadores: project.Implementadores,
            Parceiros: project.Parceiros,
            Financiadores: project.Financiadores
        })
    }

    function setResult(e){
        setProject({
            ProjectName: project.ProjectName,
            DeadLine: project.DeadLine,
            GeneralObjective: project.GeneralObjective,
            Key: project.Key,
            OperatorName: project.OperatorName,
            PeopleInvolved: project.PeopleInvolved,
            Result: e.target.value,
            SpecificObjective: project.SpecificObjective,
            TypeOfActivity: project.TypeOfActivity,
            Implementadores: project.Implementadores,
            Parceiros: project.Parceiros,
            Financiadores: project.Financiadores

        })
    }

    function setOperatorName(e){
        setProject({
            ProjectName: project.ProjectName,
            DeadLine: project.DeadLine,
            GeneralObjective: project.GeneralObjective,
            Key: project.Key,
            OperatorName: e.target.value,
            PeopleInvolved: project.PeopleInvolved,
            Result: project.Result,
            SpecificObjective: project.SpecificObjective,
            TypeOfActivity: project.TypeOfActivity,
            Implementadores: project.Implementadores,
            Parceiros: project.Parceiros,
            Financiadores: project.Financiadores
        })
    }

    function setTypeOfActivity(e){
        setProject({
            ProjectName: project.ProjectName,
            DeadLine: project.DeadLine,
            GeneralObjective: project.GeneralObjective,
            Key: project.Key,
            OperatorName: project.OperatorName,
            PeopleInvolved: project.PeopleInvolved,
            Result: project.Result,
            SpecificObjective: project.SpecificObjective,
            TypeOfActivity: e.target.value,
            Implementadores: project.Implementadores,
            Parceiros: project.Parceiros,
            Financiadores: project.Financiadores
        })
    }

    function setSpecificObjective(e){
        setProject({
            ProjectName: project.ProjectName,
            DeadLine: project.DeadLine,
            GeneralObjective: project.GeneralObjective,
            Key: project.Key,
            OperatorName: project.OperatorName,
            PeopleInvolved: project.PeopleInvolved,
            Result: project.Result,
            SpecificObjective: e.target.value,
            TypeOfActivity: project.TypeOfActivity,
            Implementadores: project.Implementadores,
            Parceiros: project.Parceiros,
            Financiadores: project.Financiadores
        })
    }

    function setPeopleInvolved(e){
        setProject({
            ProjectName: project.ProjectName,
            DeadLine: project.DeadLine,
            GeneralObjective: project.GeneralObjective,
            Key: project.Key,
            OperatorName: project.OperatorName,
            PeopleInvolved: e.target.value,
            Result: project.Result,
            SpecificObjective: project.SpecificObjective,
            TypeOfActivity: project.TypeOfActivity,
            Implementadores: project.Implementadores,
            Parceiros: project.Parceiros,
            Financiadores: project.Financiadores

        })
    }

    
    function setDeadLine(e){
        setProject({
            ProjectName: project.ProjectName,
            DeadLine: e.target.value,
            GeneralObjective: project.GeneralObjective,
            Key: project.Key,
            OperatorName: project.OperatorName,
            PeopleInvolved: project.PeopleInvolved,
            Result: project.Result,
            SpecificObjective: project.SpecificObjective,
            TypeOfActivity: project.TypeOfActivity,
            Implementadores: project.Implementadores,
            Parceiros: project.Parceiros,
            Financiadores: project.Financiadores
        })
    }

    function setImplementadores(e){
        setProject({
            ProjectName: project.ProjectName,
            DeadLine: project.DeadLine,
            GeneralObjective: project.GeneralObjective,
            Key: project.Key,
            OperatorName: project.OperatorName,
            PeopleInvolved: project.PeopleInvolved,
            Result: project.Result,
            SpecificObjective: project.SpecificObjective,
            TypeOfActivity: project.TypeOfActivity,
            Implementadores: e.target.value,
            Parceiros: project.Parceiros,
            Financiadores: project.Financiadores
        })
    }

    
    function setParceiros(e){
        setProject({
            ProjectName: project.ProjectName,
            DeadLine: project.DeadLine,
            GeneralObjective: project.GeneralObjective,
            Key: project.Key,
            OperatorName: project.OperatorName,
            PeopleInvolved: project.PeopleInvolved,
            Result: project.Result,
            SpecificObjective: project.SpecificObjective,
            TypeOfActivity: project.TypeOfActivity,
            Implementadores: project.Implementadores,
            Parceiros: e.target.value,
            Financiadores: project.Financiadores
        })
    }

    
    function setFinanciadores(e){
        setProject({
            ProjectName: project.ProjectName,
            DeadLine: project.DeadLine,
            GeneralObjective: project.GeneralObjective,
            Key: project.Key,
            OperatorName: project.OperatorName,
            PeopleInvolved: project.PeopleInvolved,
            Result: project.Result,
            SpecificObjective: project.SpecificObjective,
            TypeOfActivity: project.TypeOfActivity,
            Implementadores: project.Implementadores,
            Parceiros: project.Parceiros,
            Financiadores: e.target.value
        })
    }

    function back(e){
        window.history.back()
    }

    function submitProject(e){

        set(ref(db, 'Project/' + uuidv4()), project).then(() => {
            alert('Projecto adicionado com sucesso')
        }).catch(() => {
            alert('Erro ao adicionar o Projecto')
        })
        document.getElementById('closemodal').click()
        back()
    }


    return (
        <div className='form-container'>

            <div className='title'> 
                <div className='back-icon'>
                    <i className="bi bi-arrow-left" style={{cursor: 'pointer',
                                                                    marginRight: '20px'
                        }} onClick={back}/>
                </div>
                <div className='form-title'>
                    Adicionar Projecto
                </div>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Nome do Projecto</label>
                <input type="text" onChange={setProjectName} className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">DeadLine</label>
                <input type="date" onChange={setDeadLine} className="form-control" aria-describedby="emailHelp" />
            </div>
            
            <div className="form-group">
                <label for="exampleInputEmail1">Objecto do projecto</label>
                <input type="text" onChange={setObjective} className="form-control" aria-describedby="emailHelp"/>
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Resultado</label>
                <input type="text" onChange={setResult} className="form-control" aria-describedby="emailHelp"/>
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Nome do operador</label>
                <input type="text" onChange={setOperatorName} className="form-control" aria-describedby="emailHelp" />
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Tipo de actividade</label>
                <input type="text" onChange={setTypeOfActivity} className="form-control" aria-describedby="emailHelp" />
            </div>
            
            
            <div className="form-group">
                <label for="exampleInputEmail1">Objectivo Especifico</label>
                <input type="text" onChange={setSpecificObjective} className="form-control" aria-describedby="emailHelp" />
            </div>

{/*
            <div className="form-group">
                <label for="exampleInputEmail1">Pessoal Envolvolvido</label>
                <input type="text" onChange={setPeopleInvolved} className="form-control" aria-describedby="emailHelp" />
            </div>
                    */}
            <div className="form-group">
                <label for="exampleInputEmail1">Implementadores</label>
                <input type="text" onChange={setImplementadores} className="form-control" aria-describedby="emailHelp" />
            </div>
          
            <div className="form-group">
                <label for="exampleInputEmail1">Parceiros</label>
                <input type="text" onChange={setParceiros} className="form-control" aria-describedby="emailHelp" />
            </div>
            
            <div className="form-group">
                <label for="exampleInputEmail1">Financiadores</label>
                <input type="text" onChange={setFinanciadores} className="form-control" aria-describedby="emailHelp" />
            </div>
            <button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Gravar Projecto         </button>
            <button type="button" className="btn btn-secondary">Descartar</button>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Confirmação</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Submeter Projecto ?</label>
                    </div>
                </form>
                    </div>
                        <div className="modal-footer">
                            <button type="button" id='closemodal' className="btn btn-secondary" data-dismiss="modal">Não</button>
                            <button type="button" className="btn btn-primary" onClick={submitProject}>Sim</button>
                        </div>
                    </div>
                </div>
            </div>    

        </div>
    )
}

export default AddProjectForm