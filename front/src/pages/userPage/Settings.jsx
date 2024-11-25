import React, { useState } from 'react';
import { styled } from 'styled-components';
import { IntroLayout } from '../../components/element';
import { useNavigate } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";

function Settings() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNoticeClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <IntroLayout>
      <Backbutton type='button' onClick={() => navigate(-1)}><SlArrowLeft /></Backbutton>
      <Title>설정</Title>
      <MenuList>
        {/*<MenuItem onClick={() => navigate('/member-management')}>회원 관리</MenuItem>
        <MenuItem onClick={() => navigate('/notification-settings')}>알림 설정</MenuItem>*/}
        <MenuItem onClick={handleNoticeClick}>공지사항</MenuItem>
        {/*<MenuItem onClick={() => navigate('/change-country')}>국가 변경</MenuItem>
        <MenuItem onClick={() => navigate('/language-settings')}>언어 설정</MenuItem>
        <MenuItem onClick={() => navigate('/open-source-licenses')}>오픈소스 라이선스</MenuItem>*/}
        <MenuItem onClick={() => navigate('/TermsOfService')}>서비스 이용약관</MenuItem>
        <MenuItem onClick={() => navigate('/PrivacyPolicy')}>개인정보처리방침</MenuItem>
        <MenuItem onClick={() => navigate('/InquiryPage')}>고객센터</MenuItem>
      </MenuList>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <p>공지사항이 없습니다.</p>
            <CloseButton onClick={closeModal}>닫기</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </IntroLayout>
  );
}

export default Settings;

// 스타일 컴포넌트
const Backbutton = styled.button`
  position: relative;
  top: 20px;
  left: 0;
  border: none;
  background-color: transparent;
  font-size: 22px;
  color: #777;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  color: #333;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  color: #333;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  &::after {
    content: '>';
    font-size: 16px;
    color: #777;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555; /* 조금 더 밝은 회색 */
  }
`;
