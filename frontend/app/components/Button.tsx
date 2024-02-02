interface ButtonProps {
  text: string
  additionalClasses?: string; 
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick, additionalClasses }) => {
  return (
    <button
      className='bg-jada-purple text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-jada-pink transition-colors'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button