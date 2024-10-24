import styles from "./Footer.module.css";

function Footer() {
    return <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} SENDaSLAP GmbH. All Rights reserved.</p>
        <nav className={styles.footernav}>
            <a href="https://www.bmuv.de/themen/verbraucherschutz/digitaler-verbraucherschutz/impressumspflicht" className={styles.footerLink}>
                Impressum
            </a>
            <a href="https://www.bfdi.bund.de/DE/Buerger/Inhalte/Allgemein/Datenschutz/GrundlagenDatenschutzrecht.html" className={styles.footerLink}>
                Datenschutz
            </a>
        </nav>
    </footer>
}

export default Footer;