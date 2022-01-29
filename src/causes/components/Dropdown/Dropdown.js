import Select from 'react-dropdown-select'

export default function Dropwdown(props) {
  const { options, onChange, placeholder, label, value, secondPlaceholder } =
    props
  return (
    <div className="w-full text-gray-700 p-2 sm:p-0 sm:w-4/5 md:w-1/2 lg:w-1/4 2xl:w-1/5 ml-1 sm:ml-10">
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        className="w-1/2"
        labelField={label}
        valueField={value}
        closeOnSelect={true}
        searchable={false}
        addPlaceholder={secondPlaceholder}
      />
    </div>
  )
}

