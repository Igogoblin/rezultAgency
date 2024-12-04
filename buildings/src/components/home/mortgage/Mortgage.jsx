import { useSelector } from "react-redux";
import Button from "../../button/Button";
import "./Mortgage.scss";

function Mortgage() {
  const language = useSelector((state) => state.language);
  return (
    <section className="mortgage" id="mortgage">
      <div className="wrapper">
        <div className="mortgage__area">
          <h2>
            {language === 0 ? "Расчитайте ипотеку" : "Mortgage Calculator"}
          </h2>

          <div className="mortgage__calc">
            <div className="mortgage__calc__text">
              <form action="#" className="mortgage__form">
                <div className="input-wrapper">
                  <label htmlFor="estateValue">
                    {language === 0 ? "Стоимость недвижимости" : "Estate value"}{" "}
                    (y.e.)
                  </label>
                  <input
                    type="text"
                    id="estateValue"
                    placeholder={
                      language === 0 ? "Введите стоимость" : "Estate value"
                    }
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="periodTime">
                    {language === 0 ? "Срок в годах" : "Period time"}
                  </label>
                  <input
                    type="text"
                    id="periodTime"
                    placeholder={
                      language === 0 ? "Введите срок" : "Period time"
                    }
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="initialPayment">
                    {language === 0
                      ? "Первоначальный взнос"
                      : "Initial payment"}{" "}
                    (y.e.)
                  </label>
                  <input
                    type="text"
                    id="initialPayment"
                    placeholder={
                      language === 0
                        ? "Введите первоначальный взнос"
                        : "Initial payment"
                    }
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="stake">
                    {language === 0 ? "Ставка" : "Stake"} (%)
                  </label>
                  <input
                    type="text"
                    id="stake"
                    placeholder={
                      language === 0 ? "Введите размер ставки" : "Stake"
                    }
                  />
                </div>

                <Button text={language === 0 ? "Рассчитать" : "Calculate"} />
              </form>
            </div>
            <div className="mortgage__calc__check">
              <div className="monthPay">
                <p>
                  {language === 0 ? "Ежемесячный платеж" : "Monthly payment"}
                </p>
                <span>4 410 y.e.</span>
              </div>
              <div className="totalPay">
                <p>
                  {language === 0 ? "Cумма кредита" : "Total credit amount"}
                </p>
                <span>200 000 y.e.</span>
              </div>
              <div className="procentStake">
                <p>{language === 0 ? "Процентная ставка" : "Procent stake"}</p>
                <span>24%</span>
              </div>
              <div className="datePay">
                <p>
                  {language === 0
                    ? "Дата последнего платежа"
                    : "Date of last payment"}
                </p>
                <span>28.07.2034</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mortgage;
