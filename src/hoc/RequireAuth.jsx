import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function RequireAuth({children}) {
    const location = useLocation()
    const user = useSelector(state => state.user.user)

    if (!user) {
        return <Navigate to='/login' state={{from: location}}/>
    }

    return children
}