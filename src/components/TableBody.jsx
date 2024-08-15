import Jadwal from '../../jadwal-kosong.json';

function TableBody() {
    const renderJadwal = () => {
        let printedDays = {};
        return (
            <tbody>
                {Object.keys(Jadwal).map(hari => {
                    const jadwalHariIni = Jadwal[hari];
                    return jadwalHariIni.map((jadwal, index) => {
                        if (!printedDays[hari] && index === 0) {
                            printedDays[hari] = true;
                            return (
                                <tr key={`${hari}-${index}`} className='animate__animated animate__fadeIn animate__delay-1s'>
                                    <td rowSpan={jadwalHariIni.length} className="hari">{hari.toLocaleUpperCase()}</td>
                                    <td className='kontrak-kuliah'>{jadwal.kontrak_kuliah}</td>
                                    <td>{jadwal.mata_kuliah} - <sup>{jadwal.kelompok}</sup></td>
                                    <td>{jadwal.jam}</td>
                                    <td className='ruang'>{jadwal.ruang}</td>
                                </tr>
                            );
                        } else if (index !== 0) {
                            return (
                                <tr key={`${hari}-${index}`} className='animate__animated animate__fadeIn animate__delay-1s'>
                                    <td className='kontrak-kuliah'>{jadwal.kontrak_kuliah}</td>
                                    <td>{jadwal.mata_kuliah} - <sup>{jadwal.kelompok}</sup></td>
                                    <td>{jadwal.jam}</td>
                                    <td className='ruang'>{jadwal.ruang}</td>
                                </tr>
                            );
                        }
                        return null;
                    });
                }).reduce((acc, curr) => [...acc, ...curr], [])}
            </tbody>
        );
    };

    return renderJadwal();
}

export default TableBody;
