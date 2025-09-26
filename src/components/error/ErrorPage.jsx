import { useRouteError } from "react-router"

const ErrorPage = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return <div>Page not found!</div>
  }

  return (
    <div>Oops! An error occured while processing the request!</div>
  )
}

export default ErrorPage
