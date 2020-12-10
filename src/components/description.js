import React,{ useState, useEffect } from 'react'
import { useParams } from  "react-router-dom"
import dishes from "../dishes";
const Description = () => {
    const {id} = useParams()
    const [meal,setMeal] = useState({})
    useEffect(() => {
        setMeal(dishes.find(el => el.id === +id))
    }, [id])

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-5">
                    <img src={meal.image} alt={meal.title} className='w-100 animate__animated animate__fadeIn filter'/>
                </div>
                <div className="col-md-7 animate__animated animate__fadeInRight">
                    <h2 >{meal.title}</h2>
                    <p>Description: {meal.description}</p>
                    <p>Price: {meal.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Description