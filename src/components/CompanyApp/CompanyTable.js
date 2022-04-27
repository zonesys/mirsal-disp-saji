const CompanyTable = () => {
  const tableHeader = [
    "ID",
    "Company Name",
    "Company Address",
    "Company Mobile",
    "Groups Count",
    "Users Count",
    "Handle",
  ];
  return (
    <div>
      <h5 className="py-3">
        <strong>Company Table</strong>
      </h5>
      <div class="table-responsive">
        <table className="table">
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};
export default CompanyTable;
