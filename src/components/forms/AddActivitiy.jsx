import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import {ref,set} from 'firebase/database'
import {db} from '../database/DatabaseHelper'

import './AddActivitiy.css'

function AddActivity(){

    const [activity, setActivity] = useState({
        Key: uuidv4(),
        Id: uuidv4(),
        MacroActivityKey: document.URL.split('=')[1],
        Name: '',
        Boys: '',
        Comments: '',
        DeadLine: '',
        Description: '',
        Duration: '',
        Girls: '',
        Heterogenity:'',
        Location: '',
        Men: '',
        Name: '',
        NextSteps: '',
        StartTime: '',
        Time: '',
        Total: '',
        Waited: '',
        Women: '',
        User: ''
    })

    function saveActivity(e){
        set(ref(db, 'Activity/' + uuidv4()), activity);
        document.getElementById('closemodal').click()
        window.history.back()
    }

    function setName(e){

        setActivity({
            Name: e.target.value,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: activity.Time,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setDescription(e){

        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: e.target.value,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: activity.Time,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setLugar(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: e.target.value,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: e.target.value,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: activity.Time,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setStartTime(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: e.target.value,
            Time: activity.Time,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setFinalDate(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: e.target.value,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: activity.Time,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setTime(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: e.target.value,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setDuration(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: e.target.value,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: e.target.value,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setMen(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: e.target.value,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: e.target.value,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setWoman(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: e.target.value,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: e.target.value,
            User: activity.User
        })
    }

    function setBoys(e){
        setActivity({
            Name: activity.Name,
            Boys: e.target.value,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: activity.Time,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setGirls(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: e.target.value,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: activity.Time,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setComments(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: e.target.value,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: activity.Time,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setEsperado(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: activity.Time,
            Total: activity.Total,
            Waited: e.target.value,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setEterogenidade(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: e.target.value,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: activity.Time,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User
        })
    }

    function setFile(e){
        setActivity({
            Name: activity.Name,
            Boys: activity.Boys,
            Comments: activity.Comments,
            DeadLine: activity.DeadLine,
            Description: activity.Description,
            Duration: activity.Duration,
            Girls: activity.Girls,
            Heterogenity: activity.Heterogenity,
            Id: activity.Id,
            Key: activity.Key,
            Location: activity.Location,
            MacroActivityKey: activity.MacroActivityKey,
            Men: activity.Men,
            Name: activity.Name,
            NextSteps: activity.NextSteps,
            StartTime: activity.StartTime,
            Time: activity.Time,
            Total: activity.Total,
            Waited: activity.Waited,
            Women: activity.Women,
            User: activity.User,
            FileUploaded: e.target.value
        })
    }

    function back(e){
        window.history.back()
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
                    Adicionar Actividade
                </div>
            </div>
      
        <div className="form-group">
            <label for="exampleInputEmail1">Nome da actividade</label>
            <input type="text"  onChange= {setName} className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
            <label for="exampleInputEmail1">Breve descrição da actividade</label>
            <input type="text"  onChange={setDescription} className="form-control" aria-describedby="emailHelp" />
        </div>
        
        <div className="form-group">
            <label for="exampleInputEmail1">Lugar</label>
            <input type="text" onChange={setLugar} className="form-control" aria-describedby="emailHelp" />
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">Data de Inicio</label>
            <input type="date"  onChange={setStartTime}className="form-control" aria-describedby="emailHelp" />
        </div>
        
        
        <div className="form-group">
            <label for="exampleInputEmail1">Data final</label>
            <input type="date"  onChange={setFinalDate}className="form-control" aria-describedby="emailHelp" />
        </div>
        
        <div className="form-group">
            <label for="exampleInputEmail1">Hora</label>
            <input type="time" onChange={setTime} className="form-control" aria-describedby="emailHelp" />
        </div>

        
        <div className="form-group">
            <label for="exampleInputEmail1">Duração</label>
            <input type="date"  onChange={setDuration} className="form-control" aria-describedby="emailHelp" />
        </div>

        
        <div className="form-group">
            <label for="exampleInputEmail1">Homens</label>
            <input type="text" onChange={setMen} className="form-control" aria-describedby="emailHelp" />
        </div>

        
        <div className="form-group">
            <label for="exampleInputEmail1">Mulheres</label>
            <input type="text"  onChange={setWoman} className="form-control" aria-describedby="emailHelp" />
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">Meninos</label>
            <input type="text"  onChange={setBoys} className="form-control" aria-describedby="emailHelp" />
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">Meninas</label>
            <input type="text" onChange={setGirls} className="form-control" aria-describedby="emailHelp" />
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">Comentarios</label>
            <input type="text"  onChange={setComments}className="form-control" aria-describedby="emailHelp" />
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">Esperado</label>
            <select className="form-select" aria-label="Default select example" onChange={setEsperado}>
                <option selected value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>
        </div>
        
        <div className="form-group">
            <label for="exampleInputEmail1">Eterogenidade</label>
            <select className="form-select" onChange={setEterogenidade} aria-label="Default select example" >
                <option selected value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>
        </div>
     
        <div className="form-group">
            <label for="exampleInputEmail1">Carregar ficheiro</label>
            <input type="file" onChange={setFile} className="form-control" aria-describedby="emailHelp" />
        </div>
        <button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Gravar Actividade         </button>

        <button type="button" className="btn btn-secondary">Limpar</button>

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
                        <label for="exampleInputEmail1">Submeter Actividade ?</label>
                    </div>
                </form>
                    </div>
                        <div className="modal-footer">
                            <button type="button" id='closemodal' className="btn btn-secondary" data-dismiss="modal">Não</button>
                            <button type="button" className="btn btn-primary" onClick={saveActivity}>Sim</button>
                        </div>
                    </div>
                </div>
            </div>    

    </div>
    )
}

export default AddActivity