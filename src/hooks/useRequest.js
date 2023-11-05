
const useRequest = () => {
    
    const postEmail = async (url, datasEmail) => {
        
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datasEmail)
        })

    }

    return {postEmail}
}

export default useRequest


