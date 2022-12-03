import Image from "next/image";
import MainContainer from "../components/MainContainer";
import style from '../styles/index.module.css';
import VercelImg from '../images/Vercel-logo.png';
import SassImg from '../images/Sass_Logo_Color.svg.png';
import NextImg from '../images/next-js-logo.png';
import Link from "next/link";

function Index() {
  return (
      <MainContainer keywords={'main page'} title={'Главная страница'}>
        <section className={style.wrapper}>
          <h1 className={style.title}>Учебный проект по технологии NextJS</h1>
          <p className={style.description}>В проекте реализовано:</p>
          <ul className={style.list}>
            <li className={style.item}>Роутинг и постраничная навигация</li>
            <li className={style.item}>Динамическая маршрутизация</li>
            <li className={style.item}>useRouter</li>
            <li className={style.item}>Глобальные стили</li>
            <li className={style.item}>CSS модули</li>
            <li className={style.item}>Sass</li>
            <li className={style.item}>Запросы на сервер. getStaticProps и getServerSideProps</li>
            <li className={style.item}>SEO оптимизация. META теги</li>
            <li className={style.item}>Контейнеры компонентов</li>
            <li className={style.item}>Страница 404</li>
            <li className={style.item}>Деплой на хостинг</li>
          </ul>
          <ul className={style.album}>
            <Image className={style.img1} src={NextImg} alt='Логотип NextJS' />
            <Image className={style.img2} src={SassImg} alt='Логотип Sass' />
            <Image className={style.img3} src={VercelImg} alt='Логотип Vercel' />
          </ul>
          <Link className={style.link} href='/users'>Погнали!</Link>
        </section>
      </MainContainer>
  )
}

export default Index 