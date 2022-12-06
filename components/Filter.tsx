
interface PropsFilter{
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Filter = ({onChange}: PropsFilter) => {
    return(
        <div>
            <label htmlFor="sort">Sort by :</label>
            <select name="sort" id="sort" onChange={onChange}>
                <option value={"age"}  >age</option>
                <option value={"name"}>name</option>
            </select>
        </div>
    )
}