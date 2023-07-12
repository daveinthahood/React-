import React from 'react'


export class Clock extends React.Component {
    constructor(props) {
        super(props)

        //!** Iniizializziamo lo state 
        this.state = {
            date: new Date()
        }
    }

    render (){
        return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}



//! Si può inizializzare lo State all'interno del costruttore o come proprietà di classe : 

export class Clock extends React.Component {
        //!** Iniizializziamo lo state 
        state = {
            date: new Date()
        }
    
    render (){
        return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}

