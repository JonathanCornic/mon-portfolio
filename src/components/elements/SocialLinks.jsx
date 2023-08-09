import links from '../../data/socialLinksData'
export default function SocialLinks() {
    return (
        <div className="2xl:flex 2xl:flex-col 2xl:top-[42%] 2xl:left-0 2xl:fixed">
            <ul className="flex 2xl:block">
                {links.map(({ id, child, name, href, download }) => (
                    <li
                        key={id}
                        className="flex items-center h-14 px-4 2xl:w-40 2xl:ml-[-100px] 2xl:hover:ml-[-10px] 2xl:hover:rounded-md 2xl:hover:bg-gradient duration-500"
                    >
                        <a
                            href={href}
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-between items-center w-full"
                        >
                            <span className="hidden 2xl:block">{name}</span>
                            <span>{child}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
