import React, { useEffect, useState } from 'react';
import Jadwal from '../../jadwal.json';

function TableBody() {
    const [jadwalData, setJadwalData] = useState([]);

    useEffect(() => {
        setJadwalData(Jadwal);
    }, []);
    const renderJadwal = () => {
        let printedDays = {};
        return (
            <tbody>
                {Object.keys(jadwalData).map(hari => {
                    const jadwalHariIni = jadwalData[hari];
                    return jadwalHariIni.map((jadwal, index) => {
                        if (!printedDays[hari] && index === 0) {
                            printedDays[hari] = true;
                            return (
                                <tr key={`${hari}-${index}`}>
                                    <td rowSpan={jadwalHariIni.length} className="hari">{hari.toLocaleUpperCase()}</td>
                                    <td>{jadwal.kontrak_kuliah}</td>
                                    <td>{jadwal.mata_kuliah}</td>
                                    <td>{jadwal.jam}</td>
                                    <td>{jadwal.ruang}</td>
                                </tr>
                            );
                        } else if (index !== 0) {
                            return (
                                <tr key={`${hari}-${index}`}>
                                    <td>{jadwal.kontrak_kuliah}</td>
                                    <td>{jadwal.mata_kuliah}</td>
                                    <td>{jadwal.jam}</td>
                                    <td>{jadwal.ruang}</td>
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
