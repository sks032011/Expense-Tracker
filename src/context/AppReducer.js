export default (state,action)=>{
switch (action.type) {
    case 'DELETE_TRANSACTION':
        return{
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
              //send all transactions except the one that was deleted
        }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [...state.transactions,action.payload],
            }
        

    default:
        return state //If the action type does not match any case, the reducer simply returns the current state unchanged.
}
}

// The AppReducer is a reducer function that takes the current state and an action as arguments. It determines how to update the state based on the action type.
// It uses a switch statement to handle different action types. In this case, it has a case for DELETE_TRANSACTION.