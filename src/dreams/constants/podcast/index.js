import NuevaOportunidadImg from '../../assets/images/poadcast/new-opportunity.png'
import PermisoImg from '../../assets/images/poadcast/permission.png'
import VidaNormalImg from '../../assets/images/poadcast/normal-life.png'
import PazTranquilidadImg from '../../assets/images/poadcast/peace.png'
import SalirAdelanteImg from '../../assets/images/poadcast/get-ahead.png'

import NuevaOportunidadAudio from '../../assets/audios/Gladis_nueva_oportunidad_VM.mp3'
import VidaNormalAudio from '../../assets/audios/Joaquin_vida_normal_como_antes_VM.mp3'
import PazTranquilidadAudio from '../../assets/audios/Lucia_paz_tranquilidad_VM.mp3'
import PermisoAudio from '../../assets/audios/Marcos_cuando_tenga_el_permiso_de_trabajar_VM.mp3'
import SalirAdelanteAudio from '../../assets/audios/Maritza_tenemos_que_salir_adelante.mp3'

export const audios = [
  {
    image: NuevaOportunidadImg,
    src: NuevaOportunidadAudio,
  },
  {
    image: VidaNormalImg,
    src: VidaNormalAudio,
  },
  {
    image: PazTranquilidadImg,
    src: PazTranquilidadAudio,
  },
  {
    image: PermisoImg,
    src: PermisoAudio,
  },
  {
    image: SalirAdelanteImg,
    src: SalirAdelanteAudio,
  }
]

export const setAudios = (audiosData = []) => audiosData.map((audio, index) => {
  const audioComplement = audios[index]
  return {...audio, ...audioComplement}
})
