import styles from "@/app/page.module.css";
import Image from "next/image";

export default function Loading () {
    return (
        <div className={styles.loadingContainer}>
            <Image
                src={'/loadingGif.webp'}
                width={100}
                height={100}
                alt={'Loading...'}
            />
        </div>
    )
}