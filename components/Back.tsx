import {IoMdArrowRoundBack} from 'react-icons/io'

interface PropsBack {
    handleClick: () => void
}
export const Back = ({handleClick}:PropsBack) => {
    return(
        <button onClick={handleClick}>
            <IoMdArrowRoundBack />
        </button>
    )
}