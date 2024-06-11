const List = ({ data }) => {
  return (
    <>
      <table border={1}>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Model</th>
          </tr>
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.model}</td>
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

export default List;
