import styles from "./ilustracao.module.css";

export const Ilustracao = ({ imagemSrc, legenda, alt }) => {
  return (
    <div className={styles.container}>
      <img
        src={imagemSrc}
        alt={alt || "Ilustração"}
        className={styles.imagem}
      />
      <p className={styles.legenda}>{legenda}</p>
    </div>
  );
};
