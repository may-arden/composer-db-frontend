const baseURL = "http://127.0.0.1:3000"

export const addComposer = newComposer => {
    return dispatch => {
        fetch(`${baseURL}/composers`, {
            
            method: 'POST',
            body: JSON.stringify(newComposer),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        // .catch((e => { console.log(e) }))
        .then(newComposer => dispatch({ type: 'ADD_COMPOSER', payload: newComposer}))
        // .catch((e => { console.log(e) }))
        
    }
}

export const fetchComposers = category_id => {
    return (dispatch) => {
        fetch(`${baseURL}/categories/${category_id}/composers`)
        // .catch((e => { console.log(e) }))
        .then(resp => resp.json())
        .then(composers => {
            dispatch({type: 'FETCH_COMPOSERS', payload: composers})})
    }
}

