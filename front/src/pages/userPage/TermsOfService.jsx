import React from 'react';
import { styled } from 'styled-components';
import { Layout } from '../../components/element';
import { useNavigate } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';

function TermsOfService() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Backbutton onClick={() => navigate(-1)}>
        <SlArrowLeft />
      </Backbutton>
      <Title>서비스 이용약관</Title>
      <TermsContainer>
        <TermsContent>
          <h2>상품 정보의 제공 및 책임</h2>
          <p>
            ① “판매자”는 관계법령에서 규정하는 상품의 일반정보 및 “회사”가 요청하는 상품의 주요정보를
            상품판매 개시 이전에 “회사”에게 제공하여야 합니다.
          </p>
          <p>
            ② “판매자”는 “회사”에게 제공한 상품정보가 사실과 다르거나 변경되는 경우 즉시 “회사”에게
            통지하여야 합니다.
          </p>
          <p>
            ③ “판매자”의 고의 또는 과실로 사실과 다른 정보를 제공하여 “고객”에게 발생하는 모든 손해에
            대해서는 “회사”가 책임을 지지 않습니다.
          </p>
          <h2>상품의 검수기준 및 품질검사</h2>
          <p>
            ① “판매자”는 “사이트”에 상품을 판매함에 있어 “회사”가 견본품(샘플) 등을 요청하는 경우
            상당한 기간 내에 제공해야 합니다.
          </p>
          <p>
            ② “판매자”가 “사이트”를 통해 판매하는 상품은 “판매자”가 “회사”에게 제출한 견본품과 동일하여야
            하며, 품질상 하자가 없는 것이어야 합니다.
          </p>
          <p>
            ③ “회사”는 “판매자”가 납품하는 상품에 대하여 품질검사 및 성분검사가 필요한 경우 “판매자”에게
            해당 검사를 요구할 수 있습니다. 이 경우 “판매자”는 자신의 부담으로 공인된 검사기관으로부터
            검사를 받은 후 검사결과를 해당 상품의 납품 전에 “회사”에게 제출하여야 합니다.
          </p>
          <p>
            ④ 품질검사 및 성분검사 결과 “판매자”가 “사이트”를 통해 판매하는 상품이 법적 기준 또는 계약상
            기준을 충족시키지 못하여 불합격 또는 부적합 판정을 받은 경우 “회사”는 해당 상품의 판매중지
            및 상당한 기간을 정하여 시정을 요구할 수 있으며, “판매자”가 시정요구에 불응하거나 개선하지
            못한 경우 계약을 해지할 수 있습니다.
          </p>
        </TermsContent>
      </TermsContainer>
    </Layout>
  );
}

export default TermsOfService;

// 스타일 정의
const Backbutton = styled.button`
  position: relative;
  top: 20px;
  left: 0;
  border: none;
  background-color: transparent;
  font-size: 22px;
  color: #777;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin: 20px 0;
  color: #333;
`;

const TermsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const TermsContent = styled.div`
  max-height: 400px; /* 스크롤 가능하도록 설정 */
  overflow-y: auto;

  h2 {
    font-size: 18px;
    margin: 20px 0 10px;
    color: #333;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin: 10px 0;
    color: #555;
  }
`;
