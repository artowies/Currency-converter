import React,{Component} from 'react';
import {Form,Button,FormGroup,FormControl} from "react-bootstrap";

class App extends Component {

  onsubmit=(e)=>{
    e.preventDefault()
  }

  render() {

    return(
        <div>
          <div className="container " >
            <FormGroup  className=" text-center  mt-2" >
              <select className='custom-select mb-2'>
                <option value="2200">syria</option>
                <option value="8000">lebanon</option>
                <option value="1000">iraq</option>
                <option value="100">saudi</option>
                <option value="4">jordan</option>
              </select>
              <FormControl type="number" />
              <FormControl type="text"/>
              <Button variant="success">add</Button>{'  '}
            </FormGroup>
          </div>
        </div>
    )
  }

}


export default App;
