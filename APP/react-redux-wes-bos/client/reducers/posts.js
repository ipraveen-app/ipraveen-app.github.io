export default function posts(state = [], action) {
    console.log(state, action);

    switch (action.type) {
        case "INCREMENT_LIKES":
            const {index} = action;
            return [...state.slice(0, index), Object.assign({}, state[index], { likes: state[index].likes + 1 }), ...state.slice(index + 1)]
            break;
        default:
            return state;
    }

    return state;
}

