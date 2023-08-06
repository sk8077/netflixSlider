/* eslint-disable react/prop-types */
import styled from "styled-components";

const NetflixCard = ({ actualData }) => {
  const { jawSummary } = actualData;
  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          <div className="banner-image">
            <figure>
              <img
                src={jawSummary.backgroundImage.url}
                alt={jawSummary.title}
              />
            </figure>
          </div>
          <h1>{jawSummary.title}</h1>
          <p>{jawSummary.synopsis}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default NetflixCard;

const Wrapper = styled.section`
  padding: 4rem 0;
  font-family: "Lexend Deca Light";

  .container {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.25);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 20px;
    filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30%;
    height: 39%;
    margin: auto;
   
  }

  .wrapper {
    width: 100%;
    height: 100%;
  }

  .banner-image {
    height: auto;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.255);
    overflow: hidden;
    margin-bottom:10px;

    img {
      width: 100%;
      height: auto;
    }
  }

  h1 {
    color: rgba(255, 255, 255, 0.98);
    text-transform: uppercase;
    font-size: 1.8rem;
    
    /* Media query to change font size based on container width */
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (max-width: 576px) {
      font-size: 1.4rem;
    }
    @media (max-width: 400px) {
      font-size: 1rem;
      word-wrap:break-word;
    }
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
    line-height: 150%;
    letter-spacing: 2px;
    @media (max-width: 400px) {
      font-size: .4rem;
    }
  }

  /* Custom styles to fix dots and slider buttons */
  .carousel-indicators {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
  }

  .carousel-control-prev,
  .carousel-control-next {
    position: fixed;
    top: 50%;
    z-index: 9999;
  }

  .carousel-control-prev {
    left: 10px;
  }

  .carousel-control-next {
    right: 10px;
  }
`;
