import links from '../../data/socialLinksData'

export default function GithubButton() {
    return (
        <>
            {links
                .filter((link) => link.id === 2)
                .map(({ id, child, name, href }) => (
                    <a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center gap-x-2"
                    >
                        <span>{name}</span>
                        <span>{child}</span>
                    </a>
                ))}
        </>
    )
}
