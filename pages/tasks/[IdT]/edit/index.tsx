import { useRouter } from "next/router"
import { FormTask } from "../../../../components"

const EditTask = () => {
    const router = useRouter()
    const {IdT,Id} = router.query
    return (
        <div>
            {`It's EditTask of : ${IdT}`}
            <button onClick={() => router.back()}>Back</button>
            <FormTask />
        </div>
    )
}

export default EditTask