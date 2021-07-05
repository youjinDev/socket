import styled from "styled-components";
import color from "../../theme";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32em;
  height: 20em;
  margin: 12px;
  padding: 12px;
  border: 5px solid ${color.white};
  border-radius: 24px;
  color: ${color.white};
`;
