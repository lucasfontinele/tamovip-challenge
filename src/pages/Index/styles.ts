import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 100px;
  margin-top: 65px;

  height: 100%;

  h1 {
    font-weight: bold;
    font-size: 80px;
    line-height: 92px;
    color: #473889;
    margin-bottom: 55px;
  }

  .itemsContainer {
    overflow-x: hidden;
    .slick-slider {
      .slick-arrow,
      .slick-prev,
      .slick-next {
        display: none !important;
      }
      .slick-list {
        width: 920px;
        /* margin-right: -20px;
        margin-left: -20px; */
        .slick-track {
          display: flex;
          .slick-slide,
          .slick-active {
            /* margin-right: 20px;
            margin-left: 20px; */
          }
        }
      }
    }

    :hover {
      cursor: grab;
    }
  }

  .categories {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    max-height: 750px;

    overflow-y: auto;

    h3 {
      /* align-self: flex-start; */

      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 32px;

      color: #473889;

      margin-bottom: 80px;
    }
  }
`;
