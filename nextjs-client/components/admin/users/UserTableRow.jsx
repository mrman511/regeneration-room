export default function UserListItem({user, userKeys, i}){

  const parsedTableData = userKeys.map((key, j)=>{
    if (user[key]){
      return(
        <td 
          key={ `${user.id}-${key}` }
          className=""
        >
          { user[key] }
        </td>
      );
    } else {
      return <td key={`table-row-${i}-key-${j}`}></td>
    }
  })
  console.log(parsedTableData.length);
  return(
    <tr className="">
      { parsedTableData }
    </tr>
  );
}