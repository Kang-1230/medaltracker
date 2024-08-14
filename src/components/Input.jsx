import React, { useState } from "react";

const Input = ({ countries, setCountries }) => {
  const [goldCount, setGoldCount] = useState("0");

  const [silverCount, setSilverCount] = useState("0");

  const [bronzeCount, setBronzeCount] = useState("0");

  const [country, setCountry] = useState("");

  const handleAddCountry = (variable) => {
    if (!country) {
      alert("국가명을 입력해주세요.");
      return;
    }

    if (!goldCount || !silverCount || !bronzeCount) {
      alert("메달 개수를 입력해주세요.");
      return;
    }

    if (!countries.find((c) => c.country === variable)) {
      const newCountries = {
        id: new Date().getTime(),
        country: country,
        bronze: bronzeCount,
        silver: silverCount,
        gold: goldCount
      };
      setCountries([...countries, newCountries]);
      return;
    } else {
      alert("이미 존재하는 국가입니다.");
      return;
    }
  };

  //   //이런 식으로 못 줄이나?
  //   const inputTemplate = function (name, setname) {
  //     const name = (event) => {
  //       setname(event.target.value);
  //     };
  //     return;
  //   };

  //   inputTemplate(inputCountryHandler, setCountry);
  //   inputTemplate(inputGoleHandler, setGoldCount);
  //   inputTemplate(inputSilverHandler, setSilverCount);
  //   inputTemplate(inputBronzeHandler, setBronzeCount);

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
              bronze: bronzeCount
            };
          } else {
            return item;
          }
        })
      );
    } else {
      alert("국가가 존재하지 않습니다.");
      return;
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default Input;
