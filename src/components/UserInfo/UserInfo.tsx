import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface UserInfoProps {
  avatar: string;
  bio: string;
  login: string;
  url: string;
}

export function UserInfo({ avatar, bio, login, url }: UserInfoProps) {
  return (
    <div className="info">
      <img src={avatar} alt="github avatar" className="info__avatar" />
      <h2 className="info__name">{login}</h2>
      <p className="info__bio">{bio}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="info__link"
      >
        <span>Link</span>
        <FontAwesomeIcon icon={faLink} />
      </a>
    </div>
  );
}
