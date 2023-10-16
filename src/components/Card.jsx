export default function Card({ title, content, id, routePrefix }) {
    return (
        <a class="w-72 h-72 flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] m-8 overflow-hidden text-ellipsis" href={`/${routePrefix}${id}`}>
            <div class="p-4 md:p-5 h-full">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white text-center">
                    {title}
                </h3>
                <p class="mt-1 text-gray-800 dark:text-gray-400 line-clamp-[8]">
                    {content}
                </p>
            </div>
        </a>
    )
}