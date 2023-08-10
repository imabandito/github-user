import { SearchError, UserForm, UserInfo } from "../../components";
import { useAppDispatch } from "../../store/store";
import { getUser } from "../../store/userSlice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector((state: any) => state);

  const fetchUser = (username: string) => {
    try {
      dispatch(getUser(username));
    } catch (error: any) {}
  };

  return (
    <div className="home">
      <UserForm searchUser={fetchUser} />
      {loading && (
        <div className="loader">
          <FontAwesomeIcon icon={faSpinner} size="2xl" spin className="icon-100"/>
        </div>
      )}
      {error && <SearchError />}
      {data && !error && (
        <UserInfo
          url={data.html_url}
          avatar={data.avatar_url}
          bio={data.bio}
          login={data.login}
        />
      )}
    </div>
  );
}
