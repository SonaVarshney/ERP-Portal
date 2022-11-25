export const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 150,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.profilePicture || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "name",
        headerName: "Name",
        width: 100,
    },
    {
        field: "email",
        headerName: "Email",
        width: 150,
    },
    {
        field: "role",
        headerName: "Role",
        width: 100,
    },
    {
        field: "team",
        headerName: "Team",
        width: 100,
    },
    {
        field: "subteam",
        headerName: "Sub Team",
        width: 100,
    },
    {
        field: "year",
        headerName: "Year",
        width: 100,
    },
    {
        field: "branch",
        headerName: "Branch",
        width: 100,
    },
    {
        field: "phone",
        headerName: "Phone",
        width: 100,
    },
    {
        field: "isGEC",
        headerName: "GEC",
        width: 100,
    }
];