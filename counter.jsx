//! creiamo un counter che conterà ogni secondo 



export class Counter extends React.Component {
    //! inizializzo lo state 
    state = {
        count:0,
    }

    constructor(props) {
        super(props)
//! aggiotniamo lo state tramite callback 
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count +1,
                }
            })
        }, 1000)
    }
    render () {
        return <div>
            <h3> Count : {this.state.count} </h3>
        </div>
    }
}