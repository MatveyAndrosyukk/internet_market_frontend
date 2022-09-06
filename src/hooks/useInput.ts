import React, {useEffect, useState} from "react";

interface IValidation {
    isEmpty?: boolean,
    isEmail?: string,
    isPhone?: string,
    isCard?: string
}

const useValidation = (value: (string), validations: IValidation) => {
    const [isEmpty, setEmpty] = useState(!!value)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [cardError, setCardError] = useState(false)
    const [isInputValid, setInputValid] = useState(true)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isEmail':
                    const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    emailRegEx.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                case 'isPhone':
                    const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                    phoneRegEx.test(String(value).toLowerCase()) ? setPhoneError(false) : setPhoneError(true)
                    break;
                case 'isCard':
                    const cardRegEx = /(\d){4}[\-](\d){4}[\-](\d){4}[\-](\d){4}/g
                    cardRegEx.test(String(value).toLowerCase()) ? setCardError(false) : setCardError(true)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        (isEmpty || emailError || phoneError || cardError) ? setInputValid(false) : setInputValid(true)
    }, [isEmpty, emailError, phoneError, cardError])

    return {
        isEmpty,
        emailError,
        phoneError,
        cardError,
        isInputValid
    }
}

export const useInput = (initialValue: string, validations: IValidation) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
    }

    const onChangeCard = (e: React.ChangeEvent<HTMLInputElement>) => {
        let cardCode = e.target.value.replaceAll(' ', '-').replace(/[^\d|-]/, '').substring(0, 19)
        setValue(cardCode)
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setDirty(true)
    }

    const onBlurSelect = (e: React.FocusEvent<HTMLSelectElement>) => {
        setDirty(true)
    }

    const onChangeImage = (e: any) => {
        let url = URL.createObjectURL(e.target.files[0])
        setValue(url)
    }

    return {
        value,
        setDirty,
        setValue,
        onChange,
        onBlur,
        onChangeImage,
        onChangeSelect,
        onChangeCard,
        onBlurSelect,
        isDirty,
        ...valid
    }
}