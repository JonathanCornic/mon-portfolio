import PropTypes from 'prop-types'

SocialButton.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    child: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
}

export default function SocialButton({ id, name, child, href }) {
    return (
        <>
            <a
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-x-2"
            >
                <span>{name}</span>
                <span>{child}</span>
            </a>
        </>
    )
}
