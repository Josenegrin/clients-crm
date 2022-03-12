interface Props {
  children: string
}

const FormAlert = ({ children }: Props) => {
  return (
    <div className='p-2 mt-2 bg-red-500 text-white rounded-md transition-all'>
      <span className='p-4'>
        {children}
      </span>
    </div>
  )
}

export default FormAlert