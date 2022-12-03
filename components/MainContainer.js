import Head from "next/head"
import A from "./A"
import style from '../styles/MainContainer.module.css'

function MainContainer({children, keywords, title}) {
  return (
    <>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta keywords={'nextjs' + keywords} />
        <title>{title}</title>
      </Head>
      <section className={style.navbar}>
        <A href={'/'} text={'Главная'} />
        <A href={'/users'} text={'Пользователи'} />
      </section>
      <section className={style.children}>
        {children}
      </section>
    </>
  )
}

export default MainContainer