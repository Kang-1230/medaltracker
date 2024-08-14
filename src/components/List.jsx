import React from "react";

const List = ({ countries, setCountries }) => {
  const handleDeleteCountry = (bringId) => {
    alert("정말 삭제하시겠습니까?"); // 확인 누르면 바로 삭제되는데 취소는 어떻게 만드는지?
    const newCountries = countries.filter((country) => bringId !== country.id);
    setCountries(newCountries);
  };
  return (
    <div>
      {countries.length === 0 ? (
        <div>아직 추가된 국가가 없습니다. 메달을 추적하세요!</div>
      ) : (
        countries.map((country) => (
          <div key={country.country}>
            <ul>
              <li>{country.country}</li>
              <li>{country.gold}</li>
              <li>{country.silver}</li>
              <li>{country.bronze}</li>
            </ul>
            <button
              onClick={() => {
                handleDeleteCountry(country.id);
              }}
            >
              삭제
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
