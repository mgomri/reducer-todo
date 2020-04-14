import React, {useReducer} from 'react';
import { reducer, initialState } from './reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
         e.preventDefault();
        dispatch({
            type:'add_todo', 
            payload: e.target[0].value
        });
        e.target[0].value = '';
        
    }

    const clearCompleted = (e) => {

        e.preventDefault();
        dispatch({type:'clear_completed'});
        
    }

    return(
        <div className='App box'>
           <div className='title'>Reducer Todo App</div>
            <form className='form' onSubmit={handleSubmit}>
              
                <input className='input is-success' type='text' placeholder='type a todo'/>
                
                
                <button className='button is-success' type='submit'
                        name='title'>Add Todo</button>{' '}
                <button className='button is-danger' type='button' onClick={clearCompleted}>Clear Completed</button>
            </form>
            <div>
            {state.map(el =>
                  <div className='todo' 
                      key={el.id} 
                      onClick={() => dispatch({type:'toggle_completed', payload: el.id})}
                      style={el.completed? {textDecoration:'line-through solid red'}: {textDecoration:'none'}}>
                      {el.title}
                </div>
            )} 
             </div>
        </div>
    )


}


export default App;
