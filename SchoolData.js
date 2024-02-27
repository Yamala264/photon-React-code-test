import { useEffect, useState } from 'react';
import List from './list';
import { fetchData } from './Api';

const SchoolData = () => {

    const [schoollistData, setSchoolListData] = useState([]);
    const [displayPara, setDisplayData] = useState([]);

    useEffect(() => {
        fetchData().then((res) => setSchoolListData(res));
    },[])

    const handlechange = (e) => {
        let selectedSchoolvalue = e.target.value;
        const copyschoollistData = [...schoollistData]
        let para = copyschoollistData.filter((val) =>  val.school_name === selectedSchoolvalue)
        setDisplayData(para);
    }

    return (
        <>
            <div>NYC High schools Information</div>
            <List
                schoollistData={schoollistData}
                name="schooldbn"
                label="dbn"
               />
            <List
                schoollistData={schoollistData}
                name="school_name"
                label="school_name"
                handlechange = {handlechange}/>
            {displayPara.length > 0 && <p>{displayPara[0].overview_paragraph}</p>}
        </>

    )
}

export default SchoolData;
