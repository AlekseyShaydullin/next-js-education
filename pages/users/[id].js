import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import MainContainer from '../../components/MainContainer'
import style from '../../styles/user.module.scss'
console.log(style);
export default function User({user}) {

  const {query} = useRouter()
  const {city, street, suite, zipcode} = user.address
console.log(user);
  return (
    <MainContainer keywords={user.name} title={'Страница пользователя'}>
      <section>
        <h1 className={style.user__id}>Пользователь c id {query.id}:</h1>
        <p className={style.user__text}><b>Имя пользователя:</b> {user.name}</p>
        <p className={style.user__text}><b>Login:</b> {user.username}</p>
        <p className={style.user__text}><b>Почта:</b> {user.email}</p>
        <p className={style.user__text}><b>Домашний адрес:</b> {zipcode} {city}. {street} {suite}</p>
        <p className={style.user__text}><b>Телефон:</b> {user.phone}</p>
        <p className={style.user__text}><b>Вебсайт:</b> <a href={`https://${user.website}`} target='_blank'>{user.website}</a></p>
      </section>
    </MainContainer>


  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()

  return {
    props: {user}, // will be passed to the page component as props
  }
}