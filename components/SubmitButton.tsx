import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type='submit'
      className='group btn h-10 w-28 bg-gray-900 text-white disabled:scale-100 disabled:opacity-75 dark:bg-white dark:bg-opacity-10'
      disabled={pending}
    >
      {
        pending ? (
          <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'/>
        ) : <>
          Submit
          <FaPaperPlane
            className="text-xs opacity-70 transition-all rotate-45 group-hover:rotate-0 group-focus:rotate-0"
          />
        </>
      }
    </button>
  )
}

export default SubmitButton