import { Link } from "react-router-dom"

import useSound from 'use-sound'
import clickSfx from '.././sounds/sine-click.mp3'

export function NotFound() {

    const [playSound] = useSound(
        clickSfx,
        { volume: 0.5 }
    )

    return (
        <>
            <h2 className='text-zinc-700  dark:text-zinc-300 '>
                Page not found.
                <Link onClick={() => playSound()} to='/' className='pl-2 hover:text-zinc-900 dark:hover:text-zinc-100 ease-in duration-150'>
                    Go to home page
                </Link>
            </h2>
        </>
    )
}