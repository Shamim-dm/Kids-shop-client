import { useEffect } from "react"

const useTitle = title =>{
    useEffect( ()=>{
        document.title = `KidsToys/${title}`
    } ,[title])
}
export default useTitle;