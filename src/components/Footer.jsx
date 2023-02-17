export default function Footer() {
    return (
        <footer className='flex flex-row items-center justify-center bg-zinc-900 py-3'>
            <span className="text-sm text-zinc-200 hover:text-zinc-50 ease-in duration-150">
            Copyright © {new Date().getFullYear()} qcy
            </span>
        </footer>
    )
}