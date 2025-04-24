import Image from "next/image";
import styles from "../styles/Loader.module.css";

export default function Loader() {
    return (
        <div className={styles.container}>
            <Image src="/rick-and-morty-summer.gif" alt="" width={300} height={300} priority className={styles.image} />
            <h1 className={styles.message}>Redirecting...</h1>
        </div>
    );
}