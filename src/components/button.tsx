import { useInView } from '../hooks/useInView'

export const Button: React.FC = () => {
    const [ref, inView] = useInView<HTMLButtonElement>({ threshold: 0.1 })

    return (
        <button
            ref={ref}
            className={`
        transform transition-transform duration-500 ease-out
        px-4 py-1 mt-1 mb-1 font-semibold cursor-pointer
        border border-green-700 bg-green-700 text-white text-lg rounded-2xl
        hover:bg-transparent hover:text-green-700 transition
        ${inView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
      style={{ borderBottom: '6px solid #444' }}
        >
            Book Session
        </button>
    );
};
