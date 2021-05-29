import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import {Link} from 'react-router-dom';

import {readEvents} from '../actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';


    
   
class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  $titile;

  renderEvents(){
    return _.map(this.props.events, event => (
      <TableRow key = {event.id}>
        <TableCell>{event.id}</TableCell>
        <TableCell>
          <Link to={`/events/${event.id}`}>
          {event.title}
          </Link>
        </TableCell>
        <TableCell>{event.body}</TableCell>
      </TableRow>

    ))
  }

  render(){
    const style = {
      position: "fixed",
      right:50,
      bottom:50
    }
    return(
   <React.Fragment>

     <Table>
       <TableHead>
           <TableCell>ID</TableCell>
           <TableCell>Title</TableCell>
           <TableCell>Body</TableCell> 
       </TableHead>

       <TableBody> 
         {this.renderEvents()}
       </TableBody>

     </Table>
     <Button style = {style} variant="contained" color="secondary">
     <Link to="/events/new">new event</Link>
     </Button>
   </React.Fragment>
    )}
  }

const mapStateToProps = state => ({events: state.events})
const mapDispachToProps = ({readEvents})

  export default connect(mapStateToProps,mapDispachToProps)(EventsIndex)
  
  
 
      
  
  

      
