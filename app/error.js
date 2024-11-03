'use client' // Error boundaries must be Client Components

import styles from "@/app/page.module.css";
import Link from "next/link";

export default function Error({ error, reset }) {
    return (
        <div className={styles.notFoundContainer}>
            <h2>Algo salió mal!</h2>
            <Link className={styles.movieDetailsButton} href="/">Volver a intentar</Link>
        </div>
    )
}