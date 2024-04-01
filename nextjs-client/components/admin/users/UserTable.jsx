import captitalizeString from "@/utils/helpers/capitalizeString";
import UserTableRow from "./UserTableRow";

function TableHeader({ title }){

  return (
    <th scope="col" className="p-auto">{ title }</th>
  );
}

export default function UserTable({ users }){
  const userKeys = ['last_name', 'first_name', 'email', 'phone_number', 'member_since', 'notifications', 'is_admin'];
  const parsedTableHeaders = userKeys.map((key, i) =>{
    const title = captitalizeString(key.split('_').join(' '));

    return <TableHeader key={ `th-${key}-{i}` } title={ title }/>
  })

  const parsedUserTableRows = users.map((user, i)=> <UserTableRow
    key={ `table-row-${ user.id }` }
    user={ user }
    userKeys={ userKeys }
    i={ i }
  />)

  return (
    <table className="w-full h-full overflow-x-scroll">
      <tr className="h-10 border-b-2 border-gray-200">
       { parsedTableHeaders }
      </tr>
      { parsedUserTableRows }
    </table>
  );
}