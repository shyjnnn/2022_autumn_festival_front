import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booth.css';

export default function Booth() {
  const [searchValue, setsearchValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setsearchValue(e.target.value); //바로 검색가능하다.
    navigate(`/booth?q=${e.target.value}`);
  };

  return (
    <section className="search-container">
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="부스이름 또는 메뉴 검색하기"
      />
    </section>
  );
}
