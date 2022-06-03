import { useEffect, useState } from "react"

export const ContactModal = () => {

    const [isValid, setIsValid] = useState(true);

    const [info, setInfo] = useState({
        name: '',
        phone: '',
        email: ''
    });

    useEffect(() => {

        info.name && info.phone && info.email && setIsValid(false);

        return () => {

        }
    },[info.name, info.phone, info.email]);

    const onChangeHandler = (e) => {
        const {name, value} = e.target;

        setInfo({
            ...info,
            [name]: value
        })
    }

      return (
          <div>
            <form onSubmit={onSubmitHandler}>
                <input required placeholder='Name' name="name" value={info.name} onChange={(e) => onChangeHandler(e)}></input>
                <input required placeholder='Phone Number' name="phone" value={info.phone} onChange={(e) => onChangeHandler(e)}></input>
                <input required placeholder='Email Address' name="email" value={info.email} onChange={(e) => onChangeHandler(e)}></input>
                <button disabled={isValid} type="submit">Submit</button>
            </form>
          </div>
      )
  }