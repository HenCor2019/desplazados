import ButtonClose from '../../../assets/images/Lightbox/cerrar_button.png'

const styles = {
  container: 'w-12 h-12 self-end cursor-pointer mt-3',
  image: 'w-full h-full px-2 pt-3'
}
export default function CardHeader({ handleOnClick }) {
  return (
    <div className={styles.container} onClick={handleOnClick}>
      <img
        className={styles.image}
        src={ButtonClose}
        alt="button close desplazados"
      />
    </div>
  )
}
