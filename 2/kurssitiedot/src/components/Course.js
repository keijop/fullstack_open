  const Part = ({part}) => {
    console.log()
    return(
        <p>{part.name} {part.exercises}</p>
      )
  }



  const Header = ({course}) => {
    return(
      <h2>{course.name}</h2>
      )
  }



  const Content = ({course}) => {
  return(
      <>
      {course.parts.map(part => <Part key={part.id} part={part} />)}
      </>
    )
  }



  const Footer = ({course}) => {
    const sum = course.parts.reduce((total ,current) => total + current.exercises, 0)
  return(
      <b>Number of exercises {sum}</b>
    )
  }


  

  const Course = ({course}) => {
    return(
      <>
        <Header course={course} />
        <Content course={course} />
        <Footer course={course} />
      </>
      )
  }


export default Course
