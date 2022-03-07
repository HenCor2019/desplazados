import ReactDOM from 'react-dom'
import { useEffect } from 'react'

export default function Modal({ children }) {
  const portalNode = document.createElement('div')
  portalNode.classList.add('top-0', 'fixed', 'w-screen', 'h-screen', 'z-40')

  useEffect(() => {
    document.body.appendChild(portalNode)
    return () => {
      portalNode.remove()
    }
  }, [portalNode])

  return ReactDOM.createPortal(children, portalNode)
}
