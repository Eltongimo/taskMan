import React from 'react'
import {db} from './database/DatabaseHelper'
import {useState, useEffect} from 'react'
import { child, get, ref } from "firebase/database"
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import './ShowDashboard.css'
import LATProjectReportPDF from './ReportsPDF/LATProjectReportPDF'

function ShowDashboard(){
    const history = useHistory()
    const [projects, setProjects ] = useState()
    const [lats, setLats ] = useState()
    const [products, setProducts] = useState()
    const [macroActivities, setMacroActivities] = useState()
    const [activities, setActivities] = useState()
    const dbRef = ref(db)
    const userRole = document.getElementById('role').innerHTML
    const userProjects = document.getElementById('userprojects').innerHTML.split(';')

    function getProject(){

        get(child(dbRef, 'Project'),[]).then(snapshot => {
            if (snapshot.exists()){
                let a = {}

                if (userRole !== 'operacional'){
                    
                    for (let index in userProjects){
                        for (let key in snapshot.val()){
                            if ( userProjects[index] === snapshot.val()[key].ProjectName){
                                a[key] = snapshot.val()[key]
                            }
                        }
                    }
                }else{
                    a = snapshot.val()
                }
                setProjects(a)
            }
        })
        get(child(dbRef, 'Product'),[]).then(snapshot => {
            if (snapshot.exists()){
                setProducts (snapshot.val())
            }
        })

        get(child(dbRef, 'MacroActivity'),[]).then(snapshot => {
            if (snapshot.exists()){
                setMacroActivities (snapshot.val())
            }
        })

        get(child(dbRef, 'Activity'),[]).then(snapshot => {
            if (snapshot.exists()){
                setActivities (snapshot.val())
            }
        })
        
    }
    
    function getLATS(){

        get(child(dbRef, `LAT`),[]).then((snapshot) => {
            if (snapshot.exists()){
                setLats(snapshot.val())
            }
        })
    }

    useEffect( () => {
        getProject()
        getLATS()
    },[])

    function gotoDashboardProduct(e){

        const a = e.target.id.split('.')

        if ( a[0] === '0')
        {
            alert('Sem LAT para Mostrar neste projecto')
        }else{
            history.push({
                pathname: '/dashboard',
                search: `?key=${a[1]}`
            })
        }
    }

    function generateProjectReport(e){
        
        if (userRole !== 'operacional'){
            alert('Apenas os utilizadores operacionais podem gerar relatorios dos projectos')
            return 
        }
        LATProjectReportPDF(lats,projects[e.target.id], products,macroActivities,activities)
    }

    function reportButton (key){
        let a = []

        if  (userRole === 'operacional'){
            a.push(
                <button type='button' className='btn btn-primary report-button' id={key} onClick={generateProjectReport}>
                     Relatorio
                </button>
            )
        }
        return a
        
    }
    function createCard(){

        let cards = []
        let count = 0
        for(let key in projects){
                let la = []
                count = 0
                for (let latKey in lats){
                    if (lats[latKey].ProjectKey === projects[key].Key){
                        la.push ( <div className='card-content'>   
                                         {lats[latKey].Description}
                            </div>
                        )
                        count++
                    }

                }
                            
                cards.push(
                    <div className="col-sm">
                        <div className="card" style={{
                            marginTop: '15px',
                            textAlign: 'justify'
                            }}>

                                <h5 className="card-header"
                                style={{
                                    color: 'white', 
                                    background: '#001489',
                                    display: 'flex'
                                }}>
                                    <div style={{width:'90%',color: 'white'}}>
                                        {projects[key].ProjectName}
                                    </div>{
                                        reportButton(key)
                                    }
                                </h5>
                            <div className="card-body">
                                <h5 className="card-title">Linha de Acção Tematica</h5>
                                {la}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr', 
                                    marginTop: '10px'  
                                }}>
                                    <a  className="btn btn-primary" value={count} onClick={gotoDashboardProduct} id={`${count}.${key}`}>
                                        Ver Projecto
                                    </a> 
                                    <h5 >Total : {count} </h5>
                                </div>
                        </div>
                        </div>
                    </div>
                )
        }
        return cards
    }

    return (
        <div className='home-container'>
            {createCard()}
        </div>
    )
}

export default ShowDashboard