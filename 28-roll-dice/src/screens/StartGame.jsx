import styled from 'styled-components';
import { Button } from '../components/Button';

const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div><img src="/dices.png" alt="" /></div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    flex-direction: column; 
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
        max-width: 100%;
        height: auto;
    }

    .content {
        margin-top: 20px;

        h1 {
            font-size: 48px;
            white-space: nowrap;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row; 
        justify-content: space-between;

        .content {
            h1 {
                font-size: 96px;
            }
        }
    }
`;