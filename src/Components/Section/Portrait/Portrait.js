import BurgerMenu from './BurgerMenu/BurgerMenu'

const Portrait = ({ banner, links, children }) => {
  return (
    <div className="w-full min-h-screen">
      <header className="w-full h-24 bg-red-600 sticky top-0 left-0 z-30">
        {/* Banner */}
        <BurgerMenu links={links} />
      </header>

      <main>{children}</main>
    </div>
  )
}

export default Portrait
