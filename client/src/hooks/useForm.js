import { useState } from "react"

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues)

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormValues(state => ({
            ...state,
            [name]: value
        }))
    }

    return [formValues, onChangeHandler, onSubmitHandler]
}