import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero__main">
      <div className="hero__inner">
        <div className="hero__elements">
          <div className="hero__text">
            <h1>
              Track Investments <br /> With Ease
            </h1>
            <div className="separator"></div>
            <h4>
              No More Tracking Trades With Spreadsheets <br /> Set Investment
              Goals and Crush Them <br />
            </h4>
            <div className="hero__button">
              <Link>
                <button>Get Started</button>
              </Link>
            </div>
          </div>
          <div className="hero__image">
            <img
              src="/images/hero_illustration.svg"
              alt="get more job offers"
            />
          </div>
        </div>{' '}
        {/*Hero elements */}
      </div>

      <div className="hero__footer">
        <div className="base-shape">
          <div className="top-shape"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
