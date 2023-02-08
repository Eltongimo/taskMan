import React from 'react'
import {db} from '../database/DatabaseHelper'
import {useState, useEffect} from 'react'
import { child, get, ref, remove } from "firebase/database"
import TaskRow from '../TaskRow'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function Product (){
   const [products, setProducts] = useState({products:  []}) 

   const history = useHistory()

    useEffect( () => {
        const dbRef = ref(db)
           
            get(child(dbRef, `Product`)).then((snapshot) => {
                    if (snapshot.exists())
                        setProducts({projects: snapshot.val()})
                    else
                        alert('no data to load from db server')
            })
        }
    ,[])

    function gotoMcs(e){
       
        history.push({
            pathname: '/macroactivities',
            search: `?key=${e.target.id.split('.')[1]}`,
        })
   
    }

    function updateProduct(e){

        history.push({
            pathname: '/updateproduct',
            search: `?key=${e.target.id.split('.')[2]}`,
        })
    }
    function deleteProduct(e){

        document.getElementById(`${e.target.id}`).click()

        remove(ref(db, `Product/${e.target.value}`)).then(() => {
            alert('Producto removido com sucesso')
            const dbRef = ref(db)
            get(child(dbRef, `Product`)).then((snapshot) => {
                if (snapshot.exists())
                    setProducts({projects: snapshot.val()})
        })
        }).catch(() => {
            alert('Erro ao apagar producto')

        })

    }
    
    function buildTable(){
        
        var values = []
        let count = 0

        if (products !== null ){
            for(let key in products.projects){
               values.push(
                <button 
                    style={{background: 'transparent',
                            border: 'none',
                            width: '100%',
                            outline: 'none',
                        }}
                >
                    <div className='rows-report' id={`${count++}.${products.projects[key].Key}`} >
                        <div className='colmns-report'>
                        <ul id={`${count++}.${products.projects[key].Key}`} >
                            <li id={`${count++}.${products.projects[key].Key}`} >
                                {products.projects[key].Area}
                            </li>
                            <li id={`${count++}.${products.projects[key].Key}`} onClick={gotoMcs}>
                                {products.projects[key].Name}
                            </li>
                            <li id={`${count++}.${products.projects[key].Key}`}>
                                {products.projects[key].Status}
                            </li>
                            <li id={`${count++}.${key}`} onClick={updateProduct}>
                                  <i className="bi bi-pencil" id={`update.${count++}.${key}`}/>
                            </li>
                            <li id={`delete.${count}.${products.projects[key].Key}`} data-toggle="modal" data-target={`#exampleModal${count}`}>
                                 <i className="bi bi-trash" />
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="modal fade" id={`exampleModal${count}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <div className="form-group" >
                                    <label style={{textAlign: 'left'}} for="exampleInputEmail1">Apagar Producto ?</label>
                                </div>
                            </form>
                                </div>
                                    <div className="modal-footer">
                                        <button type="button" id={`${count}`} className="btn btn-secondary" data-dismiss="modal">Não</button>
                                        <button type="button" value ={key} id={count} onClick={deleteProduct} className="btn btn-primary">Sim</button>
                                    </div>
                                </div>
                            </div>
                        </div>  
                </button>
            )
            }
        }

        function add(e){
            history.push({
                pathname: '/addproducts',
                search: `?key=${document.URL.split('/')[3].split('=')[1]}`,
            })
        }

        function back(e){
            window.history.back()
        }

        return( 
        <div className='product-container'
        >
            <div className='title' id='title'>
              <i className="bi bi-arrow-left" style={{cursor: 'pointer',
                                                         marginRight: '20px'
                }} onClick={back}/>
                <input type='tex' className="form-control" id="search" aria-describedby="emailHelp" placeholder="Procurar.."></input>
                <button type="button" className="btn btn-light" id='addbutton' onClick={add}>Adicionar</button>
            </div>
            
            <div className='table-container'>
                <div className='header-container'>
                    <div className='report-header'>Area</div>
                    <div className='report-header'>Nome do Producto</div>
                    <div className='report-header'>Estado</div>
                    <div className='report-header'>Actualizar</div>
                    <div className='report-header'>Apagar</div>
                </div>
                {values}
            </div>
        </div>
        )
    }

    return buildTable()

}

export default Product