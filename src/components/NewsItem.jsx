export function NewsItem(props) {
    const {
        title,
        body,
        image,
    } = props

    return (
        <div className='flex relative bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50 w-full h-max hover:shadow-none hover:scale-95 transition-all duration-150 ease-in'>
            <div className='overflow-hidden rounded-t-md rounded-b bg-zinc-200 dark:bg-zinc-800 aspect-none transition-all duration-150 ease-in'>
                <img
                    src={image}
                    alt={title}
                    className='object-cover object-center w-full max-w-sm pr-3'
                />
            </div>
            <div className='flex flex-col p-3'>
                    <h3 className='mb-3 text-md font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                        {title}
                    </h3>
                    <div className="text-sm text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in">{body}</div>
            </div>
        </div>
    )

}