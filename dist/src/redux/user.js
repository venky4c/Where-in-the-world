const initialState = {
    firstName: 'venky',
    lastName: 'bu'
    id: 1,
    email: 'venky4c@xyz.com'    
}

function setUserDetails(user) {
    return {
        action: 'SET_USER_DETAILS',
        payload: user
    }
}

function removeUserDetails() {
    return {
        action: 'REMOVE_USER_DETAILS',
      
    }
}

function userReducer(user={}, action) {
    switch(action.type) {
        case 'SET_USER_DETAILS':
            return {
                ...user,
                ...action.payload
            }
        case 'REMOVE_USER_DETAILS':
            return {
                
            }
        default: return user
    }
}