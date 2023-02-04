import { Link } from "react-router-dom"

export function NotFound() {

    return (
        <>
            <h2 className='text-zinc-700  dark:text-zinc-300 '>
                Page not found.
                <Link to='/' className='pl-2 hover:text-zinc-900 dark:hover:text-zinc-100 ease-in duration-150'>
                    Go to home page
                </Link>
            </h2>
        </>
    )
}