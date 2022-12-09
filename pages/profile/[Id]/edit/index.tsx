import { useRouter } from "next/router";
import { Back, FormProfile } from "../../../../components";

const Edit =  () => {
    const router = useRouter()
    const {Id} = router.query
    return (
        <div>
            <section className="ml-4 mt-4">
                <Back 
                    handleClick={() => router.back()}
                    
                />

            </section>
            <FormProfile />
        </div>
    )
}

export default Edit