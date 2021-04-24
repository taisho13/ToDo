import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import {Link} from 'react-router-dom';

import {readEvents} from '../actions';
import {Button} from '@material-ui/core';


    
   
class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  $titile;

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key = {event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
          {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>

    ))
  }

  render(){
    
    return(
   <React.Fragment>
     
     <table>
       <thead>
         <tr>
           <th>ID</th>
           <th>Title</th>
           <th>Body</th>
         </tr>
       </thead>
       <tbody>
         {this.renderEvents()}
       </tbody>
     </table>
     
      <Button variant="outlined" color="primary" href="#outlined-buttons">
     <Link to="/events/new">new event</Link>
     </Button>
   </React.Fragment>
    )}
  }

const mapStateToProps = state => ({events: state.events})
const mapDispachToProps = ({readEvents})

  export default connect(mapStateToProps,mapDispachToProps)(EventsIndex)
  
  
 
      
  
  

      
