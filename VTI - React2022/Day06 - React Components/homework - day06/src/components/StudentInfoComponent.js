function StudentInfoComponent(props) {
    return (
        <table class="table-responsive-xxl">

            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Nguyễn Chí Vũ</td>
                    <td>20</td>
                    <td>Hà nội</td>
                </tr>
            </tbody>
        </table>
    )

}
export default StudentInfoComponent;