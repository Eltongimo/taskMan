import React from 'react'
import './AddProducts.css'
import { useState } from 'react'
import { useEffect } from 'react'
import {db} from '../database/DatabaseHelper'
import {set,ref,get,child} from 'firebase/database'
import {v4 as uuidv4} from 'uuid';

function AddProducts(){

    const [product, setProduct] = useState({
        Area: 'Urbanização e Regeneração Urbana',
        LatKey: '',
        Name: '',
        ProjectKey: document.URL.split('=')[1],
        Status: 'Não Iniciado',
        Key: uuidv4()
    })

    const [lat, setLats] = useState({})
    
    useEffect( () => {
        const dbRef = ref(db)
        
        get(child(dbRef, `LAT`)).then((snapshot) => {
                if (snapshot.exists()){
                    setLats({lats: snapshot.val()})
                }
             }
        )},
    [])
    
    function setProductName(e){
        setProduct({
            Area: product.Area,
            LatKey: product.LatKey,
            Name: e.target.value,
            ProjectKey: product.ProjectKey,
            Status: product.Status,
            Key: product.Key
        })
    }

    function setStatus(e){
        setProduct({
            Area: product.Area,
            LatKey: product.LatKey,
            Name: product.Name,
            ProjectKey: product.ProjectKey,
            Status: e.target.value,
            Key: product.Key
        })
    }   

    function setArea(e){

        setProduct({
            Area: e.target.value,
            LatKey: product.LatKey,
            Name: product.Name,
            ProjectKey: product.ProjectKey,
            Status: product.Status,
            Key: product.Key
        })
    }

    function generateLATS(){

        let a = []
        a.push(<option value="">Selectione uma linha de Acção Tematica</option>)

        for (let key in lat.lats){

            a.push(<option value={lat.lats[key].Description}>{lat.lats[key].Description}</option>)

        }
        return a

    }
    function saveProduct (e){

        
        for (let key in lat.lats){
            console.log(lat.lats[key].Description === product.Area)

            if (lat.lats[key].Description === product.Area ){
 
                console.log(lat.lats[key].Key)
                setProduct({
                    Area: product.Area,
                    LatKey: lat.lats[key].Key,
                    Name: product.Name,
                    ProjectKey: product.ProjectKey,
                    Status: product.Status,
                    Key: product.Key
                })        
                break
            }
        }
        
        const id = uuidv4()

        set(ref(db, 'Product/' + uuidv4()), product).then(() => {
            alert('Producto adicionado com sucesso')
        }).catch(() => {
            alert('Erro ao adicionar o Product')
        })

        document.getElementById(`closemodal`).click()
        back()
    }

    function back(){
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
                    Adicionar Producto
                </div>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Nome do Producto</label>
                <input type="text" onChange={setProductName} className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">LAT</label>
                <select className="form-select" onChange={setArea} aria-label="Default select example">
                        {generateLATS()}
                </select>
            </div>
    
            <div className="form-group">
                <label for="exampleInputEmail1">Estado do Producto</label>
                <select className="form-select" aria-label="Default select example" onChange={setStatus}>
                    <option selected value="Não Iniciado">Não Iniciado</option>
                    <option value="Em progresso">Em progresso</option>
                    <option value="Cancelado">Cancelado</option>
                    <option value="Concluido">Concluido</option>
                </select>
            </div>
        
            <button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Gravar Producto   </button>
            <button type="button"  onClik={back} className="btn btn-secundary">Descartar</button>

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
                        <label for="exampleInputEmail1">Submeter Producto ?</label>
                    </div>
                </form>
                    </div>
                        <div className="modal-footer">
                            <button type="button" id='closemodal' className="btn btn-secondary" data-dismiss="modal">Não</button>
                            <button type="button" onClick={saveProduct} className="btn btn-primary">Sim</button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
    
}

export default AddProducts