import Link from 'next/link'
import style from '../styles/404.module.css'

export default function Error() {

  return(
    <section className={style.wrapper}>
      <h1 className={style.title}>Ошибка 404</h1>
      <p className={style.description}>
        К сожалению, запрашиваемая страница не найдена, но есть другие, тоже хорошие &#128527;
      </p>
      <Link className={style.link} href='/'>Другая хорошая страница</Link>
    </section>
  )
}