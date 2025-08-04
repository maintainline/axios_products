import styled from "@emotion/styled";

export const BeautyBoxHeader = styled.div`
  text-align: center;
  margin: 0 auto;
  background-color: #fff;
  border-bottom: 1px solid #2e2e2e4d;
  padding: 30px;
  margin-bottom: 40px;
  /* width: 500px; */
`;

export const BeautyIdBox = styled.div`
  margin: 0 auto;
  width: 500px;
  display: flex;
  background-color: #fff;
  border: 1px solid #2e2e2e4d;
  border-radius: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;
export const BeautyImg = styled.img`
  width: 150px;
  height: 100%;
`;
export const BeautyTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 10px;
`;

export const BeautyPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #ff4c4cff;
  margin: 10px;
`;

export const BeautyDescription = styled.div`
  margin: 10px;
  font-size: 12px;
`;
