import styled from "styled-components";

export const PortfolioStyled = styled.section`
    display: flex;
    flex-direction: column;
    padding: 2rem 10rem;
    background: #eee;

    .wrapper {
        display: grid;
        grid-template-columns: .8fr .2fr;
        grid-gap: 30px;
        margin-bottom: 30px;

        .card {
            display: flex;
            flex-direction: column;
            padding: 10px;
            background: #fff;
            /* border: 1px solid var(--secondary); */
            box-shadow: 0 0 10px 5px var(--primary);
            overflow: hidden;

            .thumbnail {
                width: 100%;
                height: 200px;
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

                    .up {
                        transition: .2s;
                        transform: rotate(180deg);
                    }
                    
                    .down {
                        transition: .2s;
                        transform: rotate(0deg);
                    }
                }

                .description {
                    transition: 1s ease-in-out;
                }
            }
        }

        .tools {
            display: flex;
            flex-direction: clumn;
        }
    }
`