import { useEffect } from "react"
import { useParams, Outlet } from "react-router-dom"

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from "../components/UI/LoadingSpinner"
import useHttp from "../hooks/use-http"
import { getSingleQuote } from "../lib/api"

const QuoteDetail = () => {
  const params = useParams()
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)
  const { quoteId } = params

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if (error) {
    return <p className="centered">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>
  }

  return <>
    <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
    <Outlet />
  </>

}

export default QuoteDetail