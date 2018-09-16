import {i13nDispatch} from 'organism-react-i13n'

const actionHandler = (state, action) =>
{
    console.log('action', action)
    return state
}

const impressionHandler = (state, action) =>
{
    console.log('view', state.get('pvid'))
    return state
}

const initHandler = (state, action) =>
{
    console.log('init', state)

    return state
}

i13nDispatch(
    'config/set',
    {
        initHandler,
        actionHandler,
        impressionHandler,
    }
)
