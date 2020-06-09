export default function reducer(state, { type, payload }) {
    switch (type) {
        case "LOGIN_USER":
            return {
                ...state,
                currentUser: payload
            }
        case "IS_LOGGED_IN":
            return {
                ...state,
                isAuth: payload
            }
        case "SIGNOUT_USER":
            return {
                ...state,
                isAuth: false,
                currentUser: null
            }
        case "GET_ADDCUSTOMER":
            return {
                ...state,
                loading: false,
                transactions: payload
            }
        case 'DELETE_ADDCUSTOMER':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== payload)
            }
        case 'ADD_CUSTOMER':
            const newCustomer = payload
            const prevCustomer = state.transactions.filter(tran=>tran._id !== newCustomer._id)
            return {
                ...state,
                transactions: [...prevCustomer, newCustomer]
            }
        case "CUSTOMER_ERROR":
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}