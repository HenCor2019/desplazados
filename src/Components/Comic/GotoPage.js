import ComicName from './ComicName'
import './index.css'

export default function GotoPage({ options, onClick }) {
  return (
    <div className="modal w-full h-full flex justify-center items-center">
      <div className="w-1/2 h-1/3 lg:h-1/2 page-options  text-gray-700 p-5 rounded-lg">
        <h1 className="w-full text-center font-medium text-3xl 2xl:text-5xl">
          Ir a página
        </h1>

        <ul className="options-container mt-5">
          {options.map((page) => {
            if (page.name)
              return (
                <ComicName
                  key={page.src + page.index}
                  onClick={() => onClick(page)}
                  name={page.name}
                  index={page.index}
                />
              )
          })}
        </ul>
      </div>
    </div>
  )
}
