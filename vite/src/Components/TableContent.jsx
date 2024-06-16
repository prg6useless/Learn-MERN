const TableContent = ({ data = [] }) => {
  return (
    <>
      <table border={1}>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
          </tr>
          {data.length > 0 ? (
            data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.instructions}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableContent;
