import React from 'react';
import { styled } from 'styled-components';
import { Layout } from '../../components/element';
import { useNavigate } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Backbutton onClick={() => navigate(-1)}>
        <SlArrowLeft />
      </Backbutton>
      <Title>개인정보처리방침</Title>
      <TermsContainer>
        <TermsContent>
          <h2>개인정보 수집 항목</h2>
          <p>
            ① 필수항목: 이름, 연락처, 이메일 주소
          </p>
          <p>
            ② 선택항목: 주소, 생년월일
          </p>
          <h2>개인정보 수집 및 이용 목적</h2>
          <p>
            ① 서비스 제공 및 회원 관리
          </p>
          <p>
            ② 고객 문의 처리 및 공지사항 전달
          </p>
          <p>
            ③ 마케팅 및 프로모션 활용 (선택항목에 한함)
          </p>
          <h2>개인정보 보유 및 이용 기간</h2>
          <p>
            ① 회원 탈퇴 시 즉시 파기
          </p>
          <p>
            ② 관계 법령에 따라 보관이 필요한 경우, 해당 법령에서 정한 기간 동안 보관
          </p>
          <h2>동의 거부 권리 및 불이익</h2>
          <p>
            ① 귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 필수항목에 대한 동의를 거부할 경우, 서비스 이용에 제한이 있을 수 있습니다.
          </p>
        </TermsContent>
      </TermsContainer>
    </Layout>
  );
}

export default PrivacyPolicy;

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
