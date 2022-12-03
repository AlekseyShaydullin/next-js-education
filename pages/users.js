import Link from "next/link";
import MainContainer from "../components/MainContainer";
import style from '../styles/Users.module.css'

function Users({users}) {

  return (
    <MainContainer keywords={'users'}>
      <h1 className={style.title}>Список пользователей:</h1>
      <ul className={style.list}>
        {users.map(user =>
          <li className={style.item} key={user.id}>
            <Link className={style.link} href={`/users/${user.id}`}>
            &rarr; <b>{user.name}</b> ({user.company.name})
            </Link>
          </li>
          )}
      </ul>
    </MainContainer>
  )
}

export default Users

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await response.json()

  return {
    props: {users}, // will be passed to the page component as props
  }
}