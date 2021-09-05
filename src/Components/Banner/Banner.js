const styles = {
  bannerContainer:
    'flex justify-between flex-col h-screen w-1/3 bg-right bg-auto bg-cover bg-no-repeat min-0 hidden lg:block',
  titleContainer:
    'text-4xl w-10/15 h-3/5 flex justify-center content-center items-center mr-8',

  title:
    'transform -rotate-90 capitalize whitespace-nowrap pr-10 pb-10 text-gray-300 font-medium',

  image: 'flex justify-center content-center items-center h-1/4 w-10/12',

  description:
    'flex w-5/6 justify-center content-center items-center text-2xl text-gray-300 font-medium'
}

const inlineStyles = ({ background }) => ({
  backgroundImage: `url(${background})`
})

export default function Banner({ background, title, description, bannerImg }) {
  return (
    <div
      className={styles.bannerContainer}
      style={inlineStyles({ background })}
    >
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.image}>
        <img
          className="w-4/6 h-5/6"
          src={bannerImg}
          alt="desplazados banner causas"
          loading="lazy"
        />
      </div>

      <div className={styles.description}>
        <p className="w-1/2">{description}</p>
      </div>
    </div>
  )
}
