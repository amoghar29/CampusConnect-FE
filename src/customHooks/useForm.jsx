import { useState } from "react";

function useForm() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({}); 

    const handleChange = (e) => {
        const { name, value } = e.target; 
    }
}