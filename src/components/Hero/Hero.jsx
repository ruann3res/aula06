import HeroStyles from "./hero.module.css";
import carImage from "../../assets/hero.png";
import { Descricao } from "../Descricao/Descricao";
import { Ilustracao } from "../Ilustracao/Ilustracao";
import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <div className={HeroStyles.container}>
      <div className={HeroStyles.texto}>
        <Descricao
          title="Jet Lub - Super troca de óleo"
          description="Cuide do seu carro com a Jet Lub. Nos cuidamos do óleo, voce cuida do volante."
        />
        <Button preset="secondary">Agende agora</Button>
      </div>
      <div className={HeroStyles.imagem}>
        <Ilustracao
          imagemSrc={carImage}
          legenda="Um de nossos serviços"
          alt="Hero"
        />
      </div>
    </div>
  );
};
