import { ChangeEvent, useState, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface UserNameProps {
  searchUser: (username: string) => void;
}

export function UserForm({ searchUser }: UserNameProps) {
  const [userName, setUserName] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;

    setUserName(value);
    setIsDisabled(value.length === 0);
  };

  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    searchUser(userName);
    setIsDisabled(true);
  };

  return (
    <div className="user-form">
      <form>
        <div className="user-form__input-block">
          <label>GitHub username:</label>
          <input type="text" value={userName} onChange={handleUserChange} />
        </div>
        <button
          className="user-form-search"
          onClick={handleSearch}
          disabled={isDisabled}
        >
          <span>Search</span>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
        </button>
      </form>
    </div>
  );
}
