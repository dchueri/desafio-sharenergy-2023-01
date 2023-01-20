import { IUser } from "../../../interfaces/IUser";

const RandomUsersTable = ({ users }: { users: IUser[] }) => {
  return (
    <div className="w-fit shadow-lg min-w-[450px] mx-auto rounded-xl">
      <table className="block overflow-x-auto rounded-xl">
        <thead className="p-1 bg-secondary text-[#fff] border-cyan-700">
          <tr>
            <th className="tableHead"></th>
            <th className="tableHead">Nome</th>
            <th className="tableHead">E-mail</th>
            <th className="tableHead">Username</th>
            <th className="tableHead">Idade</th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            (
              { age, email, fullName, username, picture }: IUser,
              index: number
            ) => {
              let bgColor;
              index % 2 == 0
                ? (bgColor = "bg-white")
                : (bgColor = "bg-[#F4F7FA]");
              return (
                <tr key={index} className={`${bgColor}`}>
                  <td className="px-8 py-3 max-[660px]:px-2 max-[480px]:px-1 max-[660px]:text-xs align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                    <img
                      src={picture}
                      className="h-12 w-12 object-cover rounded-full"
                    />
                  </td>
                  <td className="tableRow font-bold">{fullName}</td>
                  <td className="tableRow">{email}</td>
                  <td className="tableRow">{username}</td>
                  <td className="tableRow text-center">{age}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RandomUsersTable;
