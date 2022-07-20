import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const isActive = (pathname) => router.pathname === pathname

  return(
    <nav>
      <div className="left">
      </div>
      <div className="right">
        <Link href="/signup">
          <a data-active={isActive('/signup')}>S'enregistrer</a>
        </Link>
        <Link href="/signin">
          <a data-active={isActive('/signin')}>Se connecter</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }

        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active='true'] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }

        .right {
          margin-left: auto;
        }

        .right a {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 3px;
        }
      `}</style>
    </nav>
  )
}

export default Header
