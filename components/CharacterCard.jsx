import styles from '../styles/CharacterCard.module.css'
import Image from 'next/image'

export default function CharacterCard( {character, onClick} ) {
    return (
        <div className={styles.card} onClick={onClick}>
            <Image
                src={character.image}
                alt={character.name}
                className={styles.avatar}
                width={125}
                height={125}
            />
            <h3 className={styles.title}>{character.name}</h3>
            <p className={styles.paragraph}>{character.status}</p>
            <p className={styles.paragraph}>{character.species}</p>
            <p className={styles.paragraph}>{character.type || "Sem tipo"}</p>
            <p className={styles.paragraph}>{character.gender}</p>
        </div>
    )
}