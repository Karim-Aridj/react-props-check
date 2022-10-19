import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

function ProfileComponents(props) {
    const { fullName, bio, profession, children, handleName } = props
    return (
        <div  style={{backgroundColor: "#00FFFF", width:"20em", height:'25em', borderRadius:"17px"}}>
            <div>
                { children }
            </div>
            <div style={{position:"relative" , top:"-5em" ,margin:'1em'}}>
                <h1 style={{color: "#000"}}> {fullName} </h1>              
                <p style={{color: "#000"}}> {bio} </p>
                <h2 style={{color: "#212121", fontSize:"1em"}}> {profession} </h2>
                <FontAwesomeIcon icon={faInfoCircle} onClick={e => handleName(e)} style={{color: "#651FFF", float:"right", margin: '1em 0', cursor:'pointer'}}></FontAwesomeIcon>
            </div>
            
        </div>
        
    )
    
}


export default ProfileComponents;