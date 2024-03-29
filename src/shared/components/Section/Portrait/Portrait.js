import BurgerMenu from './BurgerMenu/BurgerMenu';

function Portrait({ banner, links, children }) {
  return (
    <div className="w-full min-h-screen">
      <header className="w-full h-auto sticky top-0 left-0 z-30">
        <img src={banner} alt="banner" className="w-full h-auto" />
        <BurgerMenu links={links} />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Portrait;
