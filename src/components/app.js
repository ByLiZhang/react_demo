import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './button';
// import Box from './box';
import BoxContainer from './boxContainer'
import {genRandomColor, genRandomPos} from '../helpers';   //will look for index.js as default

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [
            {
                color: 'red',
                pos: genRandomPos()
            },
            {
                color: 'yellow',
                pos: genRandomPos()
            },
            {
                color: 'green',
                pos: genRandomPos()
            },
            {
                color: 'pink',
                pos: genRandomPos()
            },
            {
                color: 'purple',
                pos: genRandomPos()
            },
            {
                color: 'blue',
                pos: genRandomPos()
            }
            ],

        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(index){
        // this.setState({
        //     box: genRandomColor()
        // });
        const newBoxes = this.state.boxes.slice();
        newBoxes[index].color = genRandomColor();
        newBoxes[index].pos = genRandomPos();
        this.setState({
            boxes: newBoxes
        })
    }
    render(){
        const boxElements = this.state.boxes.map((item, index)=>{
            // return (
                {/*<div key={index}>
                    <Button updateColor={() => this.changeColor(index)}/>
                    <Box color={item.color}/>
                </div>*/}
            //)
            return <BoxContainer key={index} pos={item.pos} newColor={()=>this.changeColor(index)} color={item.color}/>

        });

        return (
            <div className='container'>
                <h1 className='text-center my-3'>Components Demo</h1>
                { boxElements }               
            </div>
        );
    }
};

export default App;
