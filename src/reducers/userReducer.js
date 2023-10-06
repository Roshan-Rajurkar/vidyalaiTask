// userReducer.js
const initialState = {
    users: [{
        userName: 'roshan',
        email: 'roshanrajurkar50@gmail.com',
        password: 'Roshan@123'
    }],
    currentUser: {
        userName: 'roshan',
        email: 'roshanrajurkar50@gmail.com',
        password: 'Roshan@123'
    },
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Register':
            return {
                ...state,
                users: [...state.users, action.payload],
                currentUser: action.payload,
            };

        case 'Login':
            const { email, password } = action.payload;
            const matchedUser = state.users.find(
                user => user.email === email && user.password === password
            );

            if (matchedUser) {
                return {
                    ...state,
                    currentUser: matchedUser,
                };
            } else {
                return state;
            }

        default:
            return state;
    }
};

export default userReducer;
