import {READ_EVENTS,
        READ_EVENT,
        DELETE_EVENTS,
        UPDATE_EVENT,
        CREATE_EVENTS
} from '../actions'
import _ from 'lodash'
 
const events = (events = {}, action) => {
  switch (action.type) {
    case READ_EVENT:
    case CREATE_EVENTS:    
    case UPDATE_EVENT:    
        const data = action.response.data
        return  {...events,[data.id]:data}
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENTS:
        delete events[action.id] 
        return {...events} 
    default:
      return events
  }
}
 
export default events;