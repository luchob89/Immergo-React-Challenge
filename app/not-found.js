import Link from 'next/link'
import styles from "@/app/page.module.css";

export default function NotFound() {
    return (
        <div className={styles.notFoundContainer}>
            <h2>Not Found</h2>
            <p>Página equivocada :/</p>
            <Link className={styles.movieDetailsButton} href="/">Volver</Link>
        </div>
    )
}