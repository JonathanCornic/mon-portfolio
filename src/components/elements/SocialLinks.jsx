import PropTypes from 'prop-types'

SocialLinks.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    child: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    download: PropTypes.bool.isRequired,
}
export default function SocialLinks({ id, name, child, href, download }) {
    return (
        <>
            <li
                id={id}
                className="flex items-center h-14 px-4 2xl:w-40 2xl:ml-[-100px] 2xl:hover:ml-[-10px] 2xl:hover:rounded-md 2xl:hover:bg-gradient duration-500"
            >
                <a
                    href={href}
                    download={download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center w-full"
                >
                    <span className="hidden 2xl:block">{name}</span>
                    <span>{child}</span>
                </a>
            </li>
        </>
    )
}
