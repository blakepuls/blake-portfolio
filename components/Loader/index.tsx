import style from './style.module.scss'

export default function Loader() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <div className={style.container}>
          <div className={style.loader}></div>
      </div>
  )
}