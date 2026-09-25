import React from 'react'
import ICard from './ICard'
import cat from '../images/cat.png'
function ICardGallery() {
  const student = 
  [
    {
    pic: cat,
    roll: '24343',
    name: 'Ram',
    branch: 'ECE'
    },
    {
    pic: cat,
    roll: '24344',
    name: 'Rohan',
    branch: 'AIML'
    },
    {
    pic: cat,
    roll: '24345',
    name: 'Rahul',
    branch: 'CSE'
    },
  ]


  return (
    <div style={{display:'flex'}}>
    {/*<ICard pic={cat} roll="24343" name="Ram" branch="AIML" />
    <ICard roll="24344" name="Shyam" branch="CSE" />
    <ICard />
    <ICard /> */}
    {/* <ICard data = {student[1]} /> */}

    {student.map((ele) => (
      <ICard data={ele} />
    ))}
   
    </div>
  )
}

export default ICardGallery