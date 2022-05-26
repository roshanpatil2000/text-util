// import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode === 'dark'?'white':'#26292b',
        backgroundColor:props.mode === 'dark'?'rgb(44 46 47)':'white',              
        // border : '2px solid',
        // borderColor: props.mode === 'dark'?'white':'#26292b'
    }
    // rgb(38,41,43)
    return (
        <div className="container" >
            
            
        </div>
    )
}
