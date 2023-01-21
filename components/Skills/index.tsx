import style from "./style.module.scss";

function Skill(props: {
    name: string;
    image: string;
}) {
  return (
    <div className={style['skill-item']}>
      <img className={style.image} src={props.image}></img>
      <span className={style.name}>{props.name}</span>
    </div>
  );
}

export default function Skills(props: {
    skills: {
        title: string;
        items: {
            name: string;
            image: string;
        }[];
    }[];
}) {
  return (
    <div className={style.skills}>
      {props.skills.map((skill) => {
        return (
          <div className={style.skill}>
            <h2 className={style.title}>{skill.title}</h2>
            <div className={style.items}>
              {skill.items.map((item) => {
                return <Skill name={item.name} image={item.image} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}