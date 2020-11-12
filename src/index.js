import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'
const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
    title: 'A Promised land',
    author: 'Barack Obama',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg',
    title: 'Humans',
    author: 'Brandon Stanton',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51JQKqP7GmL._AC_UL200_SR200,200_.jpg',
    title: `Little Blue Truck's Christmas`,
    author: 'Alice Schertle',
  },
]
function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}
const Book = (props) => {
  const { img, title, author } = props
  const clickHandler = (e) => {
    console.log(e.target)
    alert('Hello World')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h3>{author}</h3>
      <button type='button' onClick={clickHandler}>
        Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        Complex Example
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
