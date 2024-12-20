import "../style/QuoteInfo.css";
import { useEffect } from "react";
import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import type { quoteFetchDataTypes } from "../types/quote-fetch-types";
import useTheme from "../utils/useTheme";

function QuoteInfo() {
  const data = useLoaderData() as quoteFetchDataTypes[];
  const firstLetterCatName = data[0].category.slice(0, 1).toUpperCase();
  const catLength = data[0].category.length;
  const restOfTheName = data[0].category.slice(1, catLength);
  const categoryName = firstLetterCatName + restOfTheName;

  const { srcHero }: { srcHero: string } = useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    jsConfetti.addConfetti({
      emojis: ["💙", "💜", "💘", "💗", "⚡", "🌈"],
      emojiSize: 50,
      confettiNumber: 50,
    });
  }, []);

  const handleClickNavigate = () => {
    navigate("/");
  };

  // @ts-ignore
  const jsConfetti = new JSConfetti();
  const giveMeMoreHearts = () => {
    jsConfetti.addConfetti({
      emojis: ["💙", "💜", "💘", "💗", "⚡", "🌈"],
      emojiSize: 50,
      confettiNumber: 50,
    });
  };

  const { theme } = useTheme();

  return (
    <div className="main-container">
      <div className="info-container">
        <h2 className="quote-title">Daily quotes for a super hero !</h2>
        <div className="quote-container">
          <h3 className={`${theme && "dark-theme"}`}>{categoryName}</h3>
          <blockquote>
            <p className={`${theme && "dark-theme"}`}>{data[0].quote}</p>
            <cite>
              <i className={`${theme && "dark-theme"}`}>{data[0].author}</i>
            </cite>
          </blockquote>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="quote-btn"
            onClick={handleClickNavigate}
          >
            New feeling ?
          </button>
          <button
            type="button"
            className="quote-btn"
            onClick={giveMeMoreHearts}
          >
            More hearts !
          </button>
          </div>
        </div>
        <div>
          <img
        className="hero-img"
        src={srcHero}
        alt="Gamora des gardiens de la galaxie"
      />
      
        </div>
      
    </div>
  );
}

export default QuoteInfo;
