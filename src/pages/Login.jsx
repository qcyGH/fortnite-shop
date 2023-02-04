import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function LoginPage() {

    const navigate = useNavigate()
    const location = useLocation()
    const { signin } = useAuth()

    const fromPage = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const user = form.username.value

        signin(user, () => navigate(fromPage, { replace: true }))
    }

    return (
        <div className='absolute w-max h-max top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%]
                        flex flex-col justify-center items-center content-center'>
            <h1 className='text-center text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                Login
            </h1>

            <form onSubmit={handleSubmit} className='flex flex-col items-center mt-8'>
                <label className='text-zinc-50 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-50 rounded-lg px-3 hover:scale-95 active:scale-90 transition-all duration-150 ease-in'>
                    Name: <input name='username'
                                className='text-zinc-50 dark:text-zinc-800 bg-transparent rounded-lg border-none outline-none py-1 px-2 focus:border-none focus:shadow-none focus:ring-0 focus-visible:outline-none transition-color duration-150 ease-in'
                            />
                </label>
                <button type="submit" className='text-gray-100 bg-gray-800 dark:text-gray-900 dark:bg-gray-300 width-max px-6 py-2 mt-4 mb-2 rounded-md hover:scale-95 active:scale-90 transition-all ease duration-200'>Login</button>
            </form>
        </div>
    )
}