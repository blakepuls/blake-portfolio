import style from "./style.module.scss";

interface SkillProps {
  name: string;
  image: string;
}

export default function Skill(props: SkillProps) {
  return (
    <div className={style.container}>
      <img className={style.image} src={props.image}></img>
      <span className={style.name}>{props.name}</span>
    </div>
  );
}
