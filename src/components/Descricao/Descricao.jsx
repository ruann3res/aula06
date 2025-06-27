import DescricaoStyles from "./descricao.module.css";

export const Descricao = ({ title, description }) => {
  return (
    <div className={DescricaoStyles.container}>
      <h2 className={DescricaoStyles.title}>{title}</h2>
      <p className={DescricaoStyles.description}>{description}</p>
    </div>
  );
};
