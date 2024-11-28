import React from 'react'
import ChildComponent from './childcomponent'

const ParentComponent = () => {
    let studentOne = "Ali"
    let rollNo = 348928
    let address = "Karachi, Pakistan"

    let studentTwo = "ahmed"
    let rollNo2 = 320459
    let address2 = "Islamabad, Pakistan"

    let studentThree = "yasir"
    let rollNo3 = 343345
    let address3 = "Lahore, Pakistan"

    return (
        <div className='flex justify-around'>
            <ChildComponent 
            student = {studentOne}
            rollnumber = {rollNo}
            location = {address}
            />

<ChildComponent 
            student = {studentTwo}
            rollnumber = {rollNo2}
            location = {address2}
            />

<ChildComponent 
            student = {studentThree}
            rollnumber = {rollNo3}
            location = {address3}
            />
        </div>
    )
}

export default ParentComponent