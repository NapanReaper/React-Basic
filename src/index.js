import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'
import { books } from './books'
import Book from './Book'
import { gretting } from './testing/testing'
function BookList() {
  console.log(gretting)
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
