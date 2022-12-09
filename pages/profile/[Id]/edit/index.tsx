import { useRouter } from "next/router";
import { FormProfile } from "../../../../components";

const Edit =  () => {
    const router = useRouter()
    const {Id} = router.query
    return (
        <div>
            {`Hi, it's a edit number id : ${Id}`}
            <FormProfile />
        </div>
    )
}

export default Edit