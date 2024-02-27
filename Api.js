export const fetchData = async () => {
    const response = await fetch('https://data.cityofnewyork.us/resource/s3k6-pzi2.json');
    const data = await response.json();
    return data;
};