import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Books() {
  return (
    <Container>
        <h4>Recommeded for You</h4>
        <Content>
            <Wrap>
                <Link to={'/detail'}>
                    <img src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1591031799-415LLMdH0xL.jpg' />
                </Link>
            </Wrap>
            <Wrap>
                <Link to={'/detail2'}>
                <img src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1591032816-41gCSZosAML.jpg' />
                </Link>
            </Wrap>
            <Wrap>
                <Link to = {'/detail3'}>
                <img src='https://i.insider.com/61140d163dd01000199d2ad8?width=750&format=jpeg&auto=webp' />
                </Link>
            </Wrap>
            <Wrap>
                <Link to = {'/detail4'}>
                <img src='https://m.media-amazon.com/images/I/51UZurRCX4L.jpg' />
                </Link>
            </Wrap>
        </Content>
        <h4>Newly Added</h4>
        <Content>
            <Wrap>
                <Link to={'/detail5'}>
                <img src='https://cdn.lifehack.org/wp-content/uploads/2015/05/31055903/1-The-Kite-Runner-Riverhead-Edition.jpg' />
                </Link>
            </Wrap>
            <Wrap>
                <Link to={'/detail6'}>
                <img src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619573084l/52635601._SY475_.jpg' />
                </Link>
            </Wrap>
            <Wrap>
            <Link to={'/detail7'}>
                <img src='https://images.penguinrandomhouse.com/cover/700jpg/9780812971880' />
                </Link>
            </Wrap>
            <Wrap>
            <Link to={'/detail8'}>
                <img src='https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg?q=60' />
                </Link>
            </Wrap>
        </Content>
        <h4>Most Viewed</h4>
        <Content>
            <Wrap>
            <Link to={'/detail9'}>
                <img src='https://m.media-amazon.com/images/I/71e9MY-XE9L._AC_UL320_.jpg' />
                </Link>
            </Wrap>
            <Wrap>
            <Link to={'/detail10'}>
                <img src='https://img.theculturetrip.com/wp-content/uploads/2017/08/great-indian-novel-shashi-tharoor-viking-press.jpg' />
                </Link>
            </Wrap>
            <Wrap>
            <Link to={'/detail11'}>
                <img src='https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Complete-Works-of-Swami-Vivekananda.jpg' />
                </Link>
            </Wrap>
            <Wrap>
            <Link to={'/detail12'}>
                <img src='https://buzz.iloveindia.com/wp-content/uploads/2015/08/indian-books-40.jpg' />
                </Link>
            </Wrap>
        </Content>
        <h4>Trending</h4>
        <Content>
            <Wrap>
            <Link to={'/detail13'}>
                <img src='https://image.scoopwhoop.com/q30/s3.scoopwhoop.com/bk1/bk2.jpg' />
                </Link>
            </Wrap>
            <Wrap>
            <Link to={'/detail14'}>
                <img src='https://qph.cf2.quoracdn.net/main-qimg-57146ad259302b5670db3ead598bfd62.webp' />
                </Link>
            </Wrap>
            <Wrap>
            <Link to={'detail15'}>
                <img src='https://gobookmart.com/wp-content/uploads/2021/07/8-Best-Books-by-Indian-Authors-in-2021-so-far-1.jpg' />
                </Link>
            </Wrap>
            <Wrap>
            <Link to={'/detail16'}>
                <img src='https://book-assets.openroadmedia.com/9781555845919.jpg' />
                </Link>
            </Wrap>
        </Content>
    </Container>
  )
}

export default Books

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor:pointer;
    overflow: hidden;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1);
            border: 4px solid white
        }   
`