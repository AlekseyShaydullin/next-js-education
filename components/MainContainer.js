import Head from "next/head"
import A from "./A"
import style from '../styles/MainContainer.module.css'

function MainContainer({children, keywords}) {
  return (
    <>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta keywords={'nextjs' + keywords} />
        <title>Главная страница</title>
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