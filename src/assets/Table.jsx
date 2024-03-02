import TableBody from './TableBody'
function Table(){
    return (
            <div className="table">
            <table border="1" cellSpacing="0">
                <thead id="table-head">
                    <tr>
                        <th>F</th>
                        <th colSpan="4" className="title">Jadwal Kuliah</th>
                    </tr>
                    <tr>
                        <th>Hari</th>
                        <th>Kontrak Matkul</th>
                        <th>Mata Kuliah</th>
                        <th>Jam</th>
                        <th>Ruang</th>
                    </tr>
                </thead>
                    <TableBody />
            </table>
        </div>
)
}

export default Table