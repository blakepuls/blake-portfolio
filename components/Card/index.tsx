import style from "./style.module.scss";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  images?: string[];
  title?: string;
}

export default function GlassCard(props: CardProps) {
  return (
    <div className={`${style.card}  ${props.className}`}>


      <div className={style.header}>
        {props.images && (
          <div className={style.images}>
            {props.images?.map((image) => (
              <img className={style.image} src={image} />
            ))}
          </div>
        )}

        {props.title && <span className={style.title}>{props.title}</span>}
      </div>


      {props.children}
    </div>
  );
}
