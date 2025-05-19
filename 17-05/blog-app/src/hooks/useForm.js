import { useState } from "react"

export default function useForm(initialValue={}){

    const [formData , setFormData]=useState(initialValue)
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({...prev,[name]:value||""}))
    }
    const resetForm=()=>{
        setFormData(initialValue)
    }
    return {formData ,handleChange,setFormData,resetForm}
}