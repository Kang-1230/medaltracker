import React, { useState } from "react";

const App = () => {
  const [goldCount, setGoldCount] = useState("0");

  const [silverCount, setSilverCount] = useState("0");

  const [bronzeCount, setBronzeCount] = useState("0");

  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState("");

  const handleAddCountry = (variable) => {
    if (!countries.find((c) => c.country === variable)) {
      const newCountries = {
        id: new Date().getTime(),
        country: country,
        bronze: bronzeCount,
        silver: silverCount,
        gold: goldCount,
      };
      setCountries([...countries, newCountries]);
    } else {
      alert("이미 존재하는 국가입니다.");
    }
  };

  const handleUpdateCountry = () => {
    const existCountry = countries.find((item) => {
      return item.country === country;
    });

    if (existCountry) {
      setCountries(
        countries.map((item) => {
          console.log(item);
          if (item.country === country) {
            return {
              country: item.country,
              gold: goldCount,
              silver: silverCount,
              bronze: bronzeCount,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      alert("국가가 존재하지 않습니다.");
    }
  };

  const handleDeleteCountry = (bringId) => {
    const newCountries = countries.filter((country) => bringId !== country.id);
    setCountries(newCountries);
  };

  const inputCountryHandler = (event) => {
    setCountry(event.target.value);
  };

  const inputGoleHandler = (event) => {
    setGoldCount(event.target.value);
  };

  const inputSilverHandler = (event) => {
    setSilverCount(event.target.value);
  };

  const inputBronzeHandler = (event) => {
    setBronzeCount(event.target.value);
  };

  return (
    <>
      <h1>2024 파리 올림픽</h1>
      <section className="add-information">
        <form className="input-group">
          <div>
            국가명
            <input type="text" onChange={inputCountryHandler} />
          </div>
          <div>
            금메달
            <input type="text" onChange={inputGoleHandler} />
          </div>
          <div>
            은메달
            <input type="text" onChange={inputSilverHandler} />
          </div>
          <div>
            동메달
            <input type="text" onChange={inputBronzeHandler} />
          </div>
        </form>
        <div>
          <button
            onClick={() => {
              handleAddCountry(country);
            }}
          >
            국가 추가
          </button>
          <button onClick={handleUpdateCountry}>업데이트</button>
        </div>
      </section>
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
    </>
  );
};

export default App;
