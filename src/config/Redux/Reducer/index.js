const initialState = {
    isLogin: false,
    dataUser: {
        username: 'strangers',
        telpon: '08123456789'
    }
}

const Reducer = (state = initialState, action) => {
    if(action.type === 'CHANGE_ISLOGIN'){
        state.isLogin = action.value;
    }
    if(action.type === 'CHANGE_DATA_USER'){
        state.dataUser = action.value;
    }
    return state;
}

export default Reducer