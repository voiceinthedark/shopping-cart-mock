import './error.scss'
import { Link, useRouteError } from "react-router"

const ErrorPage = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <div className="notfound">
        <h1>Page not found!</h1>
        <Link className='back-btn' to={'/shop'}><h2>Get back to shop</h2></Link>
      </div>
    )
  }

  return (
    <div className='error'>
      Oops! An error occured while processing the request!
      <Link className='back-btn' to={'/shop'}><h2>Get back to shop</h2></Link>
    </div>
  )
}

export default ErrorPage
