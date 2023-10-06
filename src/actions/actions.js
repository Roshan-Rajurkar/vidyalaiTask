export const userLogin = (data) => {
    return {
        type: 'Login',
        payload: data
    }
}

export const userRegister = (data) => {
    return {
        type: 'Register',
        payload: data
    }
}