import './PaginationModules.css'

export default function Pagination () {
  return (
      <article className='pagination'>
        <ul>
          <li className='text disabled'>Prev</li>
          <li className='number select'>1</li>
          <li className='number'>2</li>
          <li className='number'>3</li>
          <li className='text'>Next</li>
        </ul>
      </article>
  )
}