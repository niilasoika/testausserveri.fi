import { Content } from '../Content/Content'
import styles from './Footer.module.css'
import TestausserveriLogo from '../../assets/TestausserveriFullLogo.svg'

import GithubIcon from '../../assets/GithubIcon.svg'
import InstagramIcon from '../../assets/InstagramIcon.svg'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
    { label: "Status", path: "https://status.testausserveri.fi" },
    { label: "Tietosuojaseloste", path: "/privacy" },
    { label: "Testausserveri Wiki", path: "https://wiki.testausserveri.fi" },
    { label: "Yhdistyksen säännöt", path: "https://testausserveri.fi/yhdistyksen-saannot.pdf" },
]

const socialMedias = [
    {
        icon: GithubIcon,
        name: "GitHub",
        url: "https://github.com/Testausserveri"
    },
    {
        icon: InstagramIcon,
        name: "Instagram",
        url: "https://instagram.com/Testausserveri"
    }
]

function SocialMedias() {
    return (
        <ul className={`noLinkStyles ${styles.socials}`}>
            {socialMedias.map(media => (
                <li key={media.name}>
                    <Link href={media.url}>
                        <a>
                            <Image src={media.icon} height={24} width={24} unoptimized />
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

function FooterLinks() {
    return (
        <ul className={`noLinkStyles ${styles.links}`}>
            {footerLinks.map(link => (
                <li key={link.path}>
                    <Link href={link.path}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
function FooterRow({ children }) {
    return (
        <div className={styles.row}>{children}</div>
    )
}
export function Footer({ }) {
    return (
        <div className={styles.footer}>
            <Content noMargin>
                <FooterRow>
                    <div>
                        <div>
                            <div>
                                <Link href="/">
                                    <img src={TestausserveriLogo.src}  className={styles.logo} />
                                </Link>
                                <span className={styles.businessId}>Y-tunnus: 3235794-4</span>
                            </div>
                        </div>
                        <div>
                            <FooterLinks />
                        </div>
                    </div>
                </FooterRow>
                <FooterRow>
                    <div>
                        <p style={{margin: 0}}>
                            <Link href="/credits">
                                Kehittäjät ja lisenssit
                            </Link> <br />
                            <span style={{ height: ".4rem", display: "block"}} />
                            <Link href="mailto:board@testausserveri.fi">
                                board@testausserveri.fi
                            </Link>
                            <br />
                            © 2022 Testausserveri ry
                        </p>
                        <div>
                            <SocialMedias />
                        </div>
                    </div>
                </FooterRow>
            </Content>
        </div>
    )
}
