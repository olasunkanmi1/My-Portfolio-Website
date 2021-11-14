import styled from "styled-components";
import { ReactComponent as Chevron } from '../../assets/icons/chevron.svg'

export const PortfolioStyled = styled.section`
    display: flex;
    flex-direction: column;
    padding: 2rem 10rem;

    .card-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;

        .card {
            display: flex;
            flex-direction: column;
            padding: 10px;
            border: 1px solid var(--secondary);
            /* background: #eee; */
            overflow: hidden;

            .thumbnail {
                width: 100%;
                height: 50px;
            }

            .about {
                display: flex;
                flex-direction: column;

                .name {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 0;
                    text-transform: capitalize;
                    cursor: pointer;

                    .svg {
                        /* background: green; */
                        transition: .2s;
                        transform: ${({showDescription}) => showDescription ? "rotate(180deg)" : "rotate(0deg)"};
                    }
                }

                .description {
                    display: ${({showDescription}) => (showDescription ? "flex" : "none" )};
                }
            }
        }
    }
`