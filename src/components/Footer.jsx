import React from "react";
import Container from "./Container";
import {
    socialLinks,
    browse,
    resources,
    additionalInfo,
    footerCopyrightLink,
} from "../data/footerLinks";

const Footer = () => {
    return (
        <footer className="mt-auto py-16 bg-black">
            <Container className="grid md:grid-cols-[1fr_3fr_1fr] grid-cols-1 gap-8 mb-8">
                <div>
                    <img src="/indeed-white.svg" alt="" className="h-10" />
                </div>
                <div>
                    <FooterColumnTitle>Explore Indeed</FooterColumnTitle>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <FooterColumnList links={browse} />
                        <FooterColumnList links={resources} />
                        <FooterColumnList links={additionalInfo} />
                    </div>
                </div>
                <div>
                    <FooterColumnTitle>Follow Us</FooterColumnTitle>
                    <ul className="flex gap-x-8 gap-y-4 flex-col lg:flex-row">
                        {socialLinks.map((link, index) => (
                            <li key={index}>
                                <SocialLink
                                    href={link.href}
                                    imgSrc={link.imgSrc}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
            <Container className="flex gap-4 flex-col md:flex-row">
                <p className="text-white font-medium">&copy; 2024 Indeed</p>
                {footerCopyrightLink.map((link, index) => (
                    <React.Fragment key={index}>
                        <FooterCopyrightLink
                            href={link.href}
                            imgSrc={link.imgSrc}>
                            {link.children}
                        </FooterCopyrightLink>
                        {index < footerCopyrightLink.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </Container>
        </footer>
    );
};

const SocialLink = ({ href, imgSrc }) => (
    <a href={href}>
        <img src={imgSrc} alt="" className="h-4" />
    </a>
);

const FooterCopyrightLink = ({ href, children, imgSrc }) => (
    <a
        href={href}
        className="text-white hover:text-primary-300 flex items-center">
        {children}
        {imgSrc && <img src={imgSrc} alt="" className="ml-1" />}{" "}
        {/* Add margin to the left of the image */}
    </a>
);

const Divider = () => (
    <span className="text-white font-bold hidden md:block">-</span>
);

const FooterColumnList = (props) => {
    const { links } = props;
    return (
        <ul className="w-full">
            {links.map((link) => (
                <li key={link.path} className="mb-2">
                    <a href={link.path} className="text-white">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const FooterColumnTitle = (props) => {
    const { children } = props;

    return <h3 className="text-white font-bold text-xl mb-4">{children}</h3>;
};

export default Footer;
