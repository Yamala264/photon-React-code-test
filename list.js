const List = ({schoollistData,name,label,handlechange}) => {
    
    return (
        <>
        <label htmlFor={label}>{label}</label>
        <select data-testid={label} id={label} name={name}  onChange = {name==="school_name" ? handlechange:()=>{}}>
            { schoollistData.length>0 && schoollistData?.map((val)=>{
                let schoolOrdbn = name==="school_name"? val.school_name:val.dbn;
                return <option  key={schoolOrdbn} value={schoolOrdbn}>{schoolOrdbn}</option>
            })}
        </select>
        </>

    )
}

export default List;