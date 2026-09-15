import type { Dispatch, SetStateAction } from "react";

const SearchPopup = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className={`search-popup ${isActive ? "active" : ""}`}>
        <div
          className="search-popup__overlay search-toggler"
          onClick={() => setIsActive(false)}
        />
        <div className="search-popup__content">
          <form
            role="search"
            method="get"
            className="search-popup__form"
            action="#"
          >
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search Here..."
            />
            <button
              type="submit"
              aria-label="search submit"
              className="search-btn"
            >
              <span>
                <i className="fa-regular fa-magnifying-glass" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
