import { NewsItem } from './NewsItem'

export function NewsList(props) {
    const { items = [] } = props

    return (
        <div className='mt-6 grid justify-items-start grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8'>
            {
                items.map(item => (
                    item && <NewsItem
                        key={item.title}
                        title={item.title}
                        body={item.body}
                        image={item.image}
                    />
                ))
            }
        </div>
    )
}