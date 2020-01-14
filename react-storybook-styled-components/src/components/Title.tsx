import styled from "styled-components";

type Props = {
  test?: string
}

const Title = styled.h1<Props>`
  font-size: 48px;
  margin: 0;
  padding: 0;
`

export default Title