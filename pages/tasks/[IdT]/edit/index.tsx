import { useRouter } from "next/router"
import { Back, FormTask } from "../../../../components"

const EditTask = () => {
    const router = useRouter()
    const {IdT,Id} = router.query
    return (
        <div>
            <section className="ml-4 mt-4">
                <Back 
                    handleClick={() => router.back()}
                    
                />

            </section>
            <FormTask />
        </div>
    )
}

export default EditTask