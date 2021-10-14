import axios from 'axios'

export function getContacts() {
    return (dispatch) => {
        axios.get('https://simple-contact-crud.herokuapp.com/contact')
            .then(({data}) => {
                dispatch({
                    type: 'GET_CONTACT',
                    payload: data.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function saveContact(data) {
    return (dispatch) => {
        axios.post('https://simple-contact-crud.herokuapp.com/contact', data, {header: { 'Content-Type': 'application/json'}})
            .then(() => {
                console.log('Berhasil Tersimpan');
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function deleteContact(id) {
    return (dispatch) => {
        axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {header: { 'Content-Type': 'application/json'}})
            .then(() => {
                console.log('Berhasil Dihapus');
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function getContactById(id){
    return (dispatch) => {
        axios.get(`https://simple-contact-crud.herokuapp.com/contact/${id}`,{header: { 'Content-Type': 'application/json'}})
            .then(({data}) => {
                dispatch({
                    type: 'GET_CONTACT_BY_ID',
                    payload: data.data
                })
            })
            .catch(err => {
                console.log(err);
            })   
    }
}

export function updateContact(data, id){
    return (dispatch) => {
        axios.put(`https://simple-contact-crud.herokuapp.com/contact/${id}`, data, {header: { 'Content-Type': 'application/json'}})
            .then(() => {
                console.log('Berhasil Diperbharui');
            })
            .catch(err => {
                console.log(err);
            })
    }
}