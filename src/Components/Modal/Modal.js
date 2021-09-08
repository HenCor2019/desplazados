import ReactDOM from 'react-dom'
import { useEffect } from 'react'

export default function Modal({ children }) {
  const portalNode = document.createElement('div')

  useEffect(() => {
    document.body.appendChild(portalNode)
    return () => {
      portalNode.remove()
    }
  }, [portalNode])

  return ReactDOM.createPortal(children, portalNode)
}
