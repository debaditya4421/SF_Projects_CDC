import React,{useContext} from 'react'
import Alertcontext from '../../context/alert/alertContext'

function Alert(props) {
    const alertcontext = useContext(Alertcontext)
    const {alert} = alertcontext

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div >
        {alert && <div className={`absolute w-full p-4 mb-4 text-sm ${alert.type==="success"?"text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800":"text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"} `} role="alert">
  <span className="font-medium">{capitalize(alert.type)}</span> : {alert.msg} 
</div>}
        </div>
        )
}

export default Alert