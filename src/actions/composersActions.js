// const baseURL = "http://127.0.0.1:3000"

export const addComposer = newComposer => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/categories', {
            method: 'POST',
            body: JSON.stringify(newComposer),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(newComposer => dispatch({ type: 'ADD_COMPOSER', payload: newComposer}))
    }
}

export const fetchComposers = category_id => {
    return (dispatch) => {
        // fetch(`${baseURL}/categories/${category_id}/composers`)
        fetch(`http://127.0.0.1:3000/categories/${category_id}/composers`)
        .catch((e => { console.log(e) }))
        .then(resp => resp.json())
        // console.log(resp)
        .then(composers => dispatch({type: 'FETCH_COMPOSERS', payload: composers}))
    }
}

