import React from 'react'

const Book = (props) => {
  const { img, title, author } = props
  const clickHandler = (e) => {
    alert('I love you 3000')
  }

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h3>{author}</h3>
      <button type='button' onClick={clickHandler}>
        Click here to receive love
      </button>
    </article>
  )
}
export default Book
