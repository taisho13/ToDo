import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm, submit} from 'redux-form';
import {Link} from 'react-router-dom';


import {postEvents} from '../actions';
import { TextField } from '@material-ui/core';



   
class EventsNew extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field){
        const {input,label,type,meta:{touched,error}} = field

    
        return(
            <TextField
              
                label={label}
                hintText={label}
                floatingLabelText={label}
                type={type}
                error={touched && error}
                {...input}
                fullWidth= {true}
            />
        
     )
    }

    async onSubmit(values){
        await this.props.postEvents(values)
        this.props.history.push('/')
    }
  
  
    render(){ 
        const {handleSubmit,pristine,submitting,invalid} = this.props  
    return(
        <form onSubmit={handleSubmit(this.onSubmit)}>
            
            <div>
                <Field label="Title" name="title" type="text" component={this.renderField}/>
            </div>
            <div>
                <Field label="Body" name="body" type="text" component={this.renderField}/>    
            </div>

            <div>
                <input type ="submit" value="submit" disabled={pristine || submitting ||invalid}/>
                <Link to="/">Cansel</Link>
            </div>
        </form>
    )}
  }

const validate = values => {
    const errors = {}

    if(!values.title)errors.title = "Enter a title,plase"
    if(!values.body)errors.body = "Enter a body,plase"

    return errors
}

const mapDispachToProps = ({postEvents})

  export default connect(null,mapDispachToProps)(
    reduxForm({validate,form:'eventNewForm'})(EventsNew)
      )
  
  
